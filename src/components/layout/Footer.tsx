import Link from "next/link";
import { Globe, Mail, Rss } from "lucide-react";

const footerLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

const socialLinks = [
  { icon: Globe, href: "https://sensebox.de", label: "Website" },
  { icon: Mail, href: "mailto:info@sensebox.de", label: "E-Mail" },
  { icon: Rss, href: "https://sensebox.de/blog", label: "Blog" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#62A044] text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Legal links */}
          <nav className="flex items-center gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Brand mark */}
          <p className="text-xs text-gray-100 order-last sm:order-none">
            © {new Date().getFullYear()} Reedu GmbH & Co. KG - senseBox
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-1.5 rounded hover:text-white transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
