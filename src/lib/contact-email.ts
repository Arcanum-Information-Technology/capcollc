import { createServerFn } from "@tanstack/react-start";

const SUBJECTS = [
  "Parts Inquiry",
  "Export Order",
  "Wholesale / Fleet Pricing",
  "Branch Contact",
  "General Enquiry",
] as const;

export type ContactFormInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type ContactResult = { ok: true } | { ok: false; error: string };

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\u0000/g, "").replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

function cleanMessage(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\u0000/g, "").trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function env(name: string) {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((input: ContactFormInput): ContactFormInput => {
    const data = input ?? ({} as ContactFormInput);
    return {
      name: clean(data.name, 120),
      company: clean(data.company, 160),
      email: clean(data.email, 200),
      phone: clean(data.phone, 40),
      subject: clean(data.subject, 80),
      message: cleanMessage(data.message, 5000),
    };
  })
  .handler(async ({ data }): Promise<ContactResult> => {
    const name = data.name;
    const email = data.email;
    const subject = data.subject;
    const message = data.message;
    const company = data.company;
    const phone = data.phone;

    if (name.length < 2) return { ok: false, error: "Please enter your full name." };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { ok: false, error: "Please enter a valid email address." };
    }
    if (!SUBJECTS.includes(subject as (typeof SUBJECTS)[number])) {
      return { ok: false, error: "Please choose a subject." };
    }
    if (message.length < 5) return { ok: false, error: "Please enter a message." };

    const apiKey = env("BREVO_API_KEY");
    const senderEmail = env("BREVO_SENDER_EMAIL");
    const senderName = env("BREVO_SENDER_NAME") || "Capco LLC";
    const toEmail = env("CONTACT_TO_EMAIL");

    if (!apiKey || !senderEmail || !toEmail) {
      console.error("Contact email is not configured. Set BREVO_API_KEY, BREVO_SENDER_EMAIL, and CONTACT_TO_EMAIL.");
      return { ok: false, error: "The contact form is not configured yet. Please call us instead." };
    }

    const safe = {
      name: escapeHtml(name),
      company: escapeHtml(company || "—"),
      email: escapeHtml(email),
      phone: escapeHtml(phone || "—"),
      subject: escapeHtml(subject),
      message: escapeHtml(message).replace(/\n/g, "<br />"),
    };

    const htmlContent = `
      <div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.5">
        <h2 style="margin:0 0 12px">New enquiry from the Capco website</h2>
        <p style="margin:0 0 16px">Someone submitted the contact form.</p>
        <table style="border-collapse:collapse;width:100%;max-width:640px">
          <tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:bold">Name</td><td style="padding:8px 12px;border:1px solid #e2e8f0">${safe.name}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:bold">Company</td><td style="padding:8px 12px;border:1px solid #e2e8f0">${safe.company}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:bold">Email</td><td style="padding:8px 12px;border:1px solid #e2e8f0"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:bold">Phone</td><td style="padding:8px 12px;border:1px solid #e2e8f0">${safe.phone}</td></tr>
          <tr><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:bold">Subject</td><td style="padding:8px 12px;border:1px solid #e2e8f0">${safe.subject}</td></tr>
        </table>
        <h3 style="margin:20px 0 8px">Message</h3>
        <p style="margin:0;white-space:pre-wrap">${safe.message}</p>
      </div>
    `;

    const textContent = [
      "New enquiry from the Capco website",
      "",
      `Name: ${name}`,
      `Company: ${company || "—"}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      message,
    ].join("\n");

    let response: Response;
    try {
      response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify({
          sender: { name: senderName, email: senderEmail },
          to: [{ email: toEmail, name: "Capco LLC" }],
          replyTo: { email, name },
          subject: `Website enquiry: ${subject} — ${name}`,
          htmlContent,
          textContent,
        }),
      });
    } catch (error) {
      console.error("Brevo request failed", error);
      return { ok: false, error: "We couldn't send your message. Please try again or call us." };
    }

    if (!response.ok) {
      const body = await response.text();
      console.error("Brevo rejected the contact email", response.status, body);
      return { ok: false, error: "We couldn't send your message. Please try again or call us." };
    }

    return { ok: true };
  });
