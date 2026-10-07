export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Flavours & Menu", href: "#menu" },
  { label: "Signature Scoop", href: "#signature" },
  { label: "Our Story", href: "#story" },
  { label: "Quality Craft", href: "#craft" },
  { label: "Parlor & Visit", href: "#contact" },
];

export const footerCategories = [
  { label: "Cups, Flavours & Tubs", href: "#menu" },
  { label: "Sundaes & Special Delights", href: "#menu" },
  { label: "Bars & Juicy Sticks", href: "#menu" },
  { label: "Family Pack Ice Creams", href: "#menu" },
  { label: "Dairy-Free & Vegan Treats", href: "#menu" },
];
