"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Angebote", href: "/angebote" },
  { label: "Praxisbeispiele", href: "/praxisbeispiele" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logos/sensebox.svg"
              alt="senseBox"
              width={160}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#62A044] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={`/kontakt?topic=${encodeURIComponent("Allgemeine Anfrage")}`}
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-[#62A044] hover:bg-[#4e8335] text-white",
              )}
            >
              Beratung
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#62A044]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menü öffnen"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-[#62A044] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href={`/kontakt?topic=${encodeURIComponent("Allgemeine Anfrage")}`}
              onClick={() => setMobileOpen(false)}
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full bg-[#62A044] hover:bg-[#4e8335] text-white justify-center",
              )}
            >
              Beratung anfragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
