export const SITE_NAME = "Lukina Jaja";
export const SITE_URL = "https://lukinajaja.rs";
export const SITE_DESCRIPTION =
  "Sveža domaća jaja sa slobodnog uzgoja iz Opova, Srbija. Bez hormona, bez aditiva — prirodno kao nekad.";

export const CONTACT = {
  phone: "069 201 1315",
  phoneInternational: "+381692011315",
  whatsappUrl:
    "https://wa.me/381692011315?text=Zdravo%2C%20%C5%BEelim%20da%20naru%C4%8Dim%20doma%C4%87a%20jaja!",
  location: "Opovo, Srbija",
  workingHours: "Svaki dan 8:00 – 20:00",
};

export const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/blog", label: "Blog" },
  { href: "/najcesca-pitanja", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export const BLOG_CATEGORIES = [
  "Ishrana",
  "Recepti",
  "Uzgoj",
  "Saveti",
  "Novosti",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
