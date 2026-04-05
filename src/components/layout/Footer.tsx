import Link from "next/link";
import { Egg, Phone, MapPin, Clock } from "lucide-react";
import { NAV_LINKS, CONTACT, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-foreground text-background-alt">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Egg className="w-6 h-6 text-secondary" aria-hidden="true" />
              <span className="font-heading text-lg font-bold text-white">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-sm text-background-alt/70 leading-relaxed">
              Sveža domaća jaja sa slobodnog uzgoja iz Opova. Prirodno uzgojena,
              bez hormona i aditiva.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-base font-semibold text-white mb-4">
              Navigacija
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background-alt/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-base font-semibold text-white mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-background-alt/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${CONTACT.phoneInternational}`}
                  className="hover:text-secondary transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                <span>{CONTACT.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                <span>{CONTACT.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center text-xs text-background-alt/50">
          &copy; {new Date().getFullYear()} {SITE_NAME}. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}
