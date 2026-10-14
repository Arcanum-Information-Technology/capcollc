export interface BranchInfo {
  id: string;
  name: string;
  location: string;
  role: string;
  serves: string;
  poBox: string;
  phone: string;
  phoneRaw: string; // for tel: links
  secondaryPhone?: string;
  fax?: string;
  email?: string;
  address: string;
  hours: string;
  isHeadOffice?: boolean;
}

export const HEAD_OFFICE_PHONE = "+97125556900";
export const HEAD_OFFICE_PHONE_DISPLAY = "02 555 6900";

export const BRANCHES_DATA: BranchInfo[] = [
  {
    id: "abu-dhabi-head-office",
    name: "Head Office — Abu Dhabi",
    location: "Abu Dhabi",
    role: "Head Office & Central Operations",
    serves: "UAE · GCC · International",
    poBox: "46282",
    phone: "02 555 6900",
    phoneRaw: "+97125556900",
    fax: "02 554 8842",
    email: "info@capcollc.ae",
    address: "P.O Box 46282, Abu Dhabi, United Arab Emirates",
    hours: "Sat – Thu · 08:00 – 18:00 GST",
    isHeadOffice: true,
  },
  {
    id: "mussafah-branch",
    name: "Branch — Mussafah",
    location: "Mussafah, Abu Dhabi",
    role: "Distribution & Warehousing Hub",
    serves: "Abu Dhabi · Mussafah Industrial Area",
    poBox: "8427",
    phone: "02 554 2424",
    phoneRaw: "+97125542424",
    secondaryPhone: "02 554 2425",
    fax: "02 554 0711",
    email: "info@capcollc.ae",
    address: "P.O Box 8427, Mussafah, Abu Dhabi, United Arab Emirates",
    hours: "Sat – Thu · 08:00 – 18:00 GST",
  },
  {
    id: "dubai-deira-branch",
    name: "Branch — Dubai (Deira)",
    location: "Deira, Dubai",
    role: "Export & Regional Trade Hub",
    serves: "Dubai · Africa · GCC Exports",
    poBox: "13676",
    phone: "04 282 8001",
    phoneRaw: "+97142828001",
    fax: "04 282 8002",
    email: "info@capcollc.ae",
    address: "P.O Box 13676, Deira, Dubai, United Arab Emirates",
    hours: "Sat – Thu · 08:00 – 18:00 GST",
  },
  {
    id: "dubai-ras-al-khor-branch",
    name: "Branch — Dubai (Ras Al Khor)",
    location: "Ras Al Khor, Dubai",
    role: "Local Fleet & Workshop Distribution",
    serves: "Dubai Metropolitan · Northern Emirates",
    poBox: "13676",
    phone: "04 333 3828",
    phoneRaw: "+97143333828",
    fax: "04 333 2317",
    email: "info@capcollc.ae",
    address: "P.O Box 13676, Ras Al Khor Industrial Area, Dubai, United Arab Emirates",
    hours: "Sat – Thu · 08:00 – 18:00 GST",
  },
];

export interface PartnerBrand {
  name: string;
  logo: string;
  category: string;
  description: string;
  badge: string;
}

export const PARTNER_BRANDS: PartnerBrand[] = [
  {
    name: "Zentorm",
    logo: "/patners/Zentorm.jpg",
    category: "Heavy Duty Engine & Brake Components",
    description: "Premium engineered spare parts for European commercial vehicles.",
    badge: "Authorized Supply Partner",
  },
  {
    name: "German Auto Parts",
    logo: "/patners/german.jpg",
    category: "OEM German Heavy Vehicle Parts",
    description: "High precision OEM and aftermarket parts manufactured to original standards.",
    badge: "Quality Guaranteed",
  },
  {
    name: "MC2",
    logo: "/patners/mc2.jpeg",
    category: "Suspension & Drivetrain Components",
    description: "Durable suspension, steering and powertrain spare solutions for commercial fleets.",
    badge: "Fleet Choice",
  },
  {
    name: "Volt Auto Parts",
    logo: "/patners/volt.png",
    category: "Electrical & Sensor Systems",
    description: "Advanced heavy truck electrical, lighting, sensors, and starting systems.",
    badge: "Electrical Specialist",
  },
];
