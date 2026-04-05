"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Glavna navigacija"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
        >
          <Image
            src="/images/logo.png"
            alt="Lukina Jaja logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-heading text-xl font-bold tracking-tight">
            Lukina Jaja
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-foreground-light hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/kontakt"
            className="inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-light transition-colors"
          >
            Naruči
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Zatvori meni" : "Otvori meni"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <ul className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-2.5 text-foreground-light hover:text-primary hover:bg-background-alt rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-5 py-2.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Naruči jaja
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
