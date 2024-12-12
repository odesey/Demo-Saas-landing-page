import { footerLinks } from "@/data/footerLinks";
import Link from "next/link";

const Footer = () => {
  const YEAR = new Date().getFullYear();
  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p>© {YEAR} GenesisApp, Inc. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
