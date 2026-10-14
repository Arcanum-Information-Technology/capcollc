import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useLenis } from "./useLenis";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  useLenis();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Navbar startSolid />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
