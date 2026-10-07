export interface FlavorProduct {
  id: string;
  name: string;
  tagline: string;
  category: "Cups & Tubs" | "Sundaes" | "Bars & Sticks" | "Family Packs" | "Special Flavours";
  description: string;
  ingredients: string[];
  image: string;
  badge?: string;
  calories?: string;
  accentColor: string;
  bgGradient: string;
}

export const productsData: FlavorProduct[] = [
  {
    id: "vanilla-cherry",
    name: "Classic Vanilla Bean & Cherry",
    tagline: "Creamy vanilla ice cream topped with cherry.",
    category: "Cups & Tubs",
    description:
      "Our timeless benchmark. Slow-churned fresh dairy infused with aromatic Madagascar vanilla beans, crowned with a glossy preserved cherry and delicate creamy drips.",
    ingredients: ["Fresh Cream", "Whole Milk", "Madagascar Vanilla Pods", "Natural Cane Sugar", "Glacé Cherry"],
    image: "/images/icecream/hero-scoop.jpg",
    badge: "Most Loved Classic",
    calories: "190 kcal / scoop",
    accentColor: "#EAB308",
    bgGradient: "from-amber-950/40 via-yellow-950/20 to-[#0F0807]",
  },
  {
    id: "chocolate-brownie",
    name: "Belgian Chocolate & Brownie Chunks",
    tagline: "Rich chocolate ice cream with chunks of brownie.",
    category: "Cups & Tubs",
    description:
      "Intensely decadent Belgian dark cocoa churned to velvety perfection, folded with chewy handcrafted fudge brownie bites and drizzled with molten chocolate syrup.",
    ingredients: ["Dutch Cocoa Powder", "Belgian Dark Chocolate (72%)", "Fudge Brownie Bites", "Fresh Dairy Cream"],
    image: "/images/icecream/chocolate-brownie.jpg",
    badge: "Chocoholic Favorite",
    calories: "240 kcal / scoop",
    accentColor: "#854D0E",
    bgGradient: "from-amber-950/60 via-stone-900/40 to-[#0F0807]",
  },
  {
    id: "strawberry-shortcake",
    name: "Wild Strawberry & Shortcake Swirl",
    tagline: "Strawberry ice cream layered with shortcake.",
    category: "Cups & Tubs",
    description:
      "Ripe, sun-drenched strawberries swirled with velvety sweet cream, layered with golden buttery shortcake crumbles for an irresistible crumbly, creamy bite.",
    ingredients: ["Farm-Fresh Strawberries", "Strawberry Compote", "Butter Shortcake Crumbs", "Pure Cream"],
    image: "/images/icecream/strawberry-swirl.jpg",
    badge: "Berry Sensation",
    calories: "210 kcal / scoop",
    accentColor: "#F43F5E",
    bgGradient: "from-rose-950/40 via-pink-950/20 to-[#0F0807]",
  },
  {
    id: "mango-delight",
    name: "Alphonso Mango & Fresh Fruit",
    tagline: "A bowl of colorful ice cream with fresh fruit.",
    category: "Special Flavours",
    description:
      "Celebration of royal Alphonso mangoes. Velvety golden mango puree folded with gentle dairy sweetness, complemented by freshly diced fruit cubes.",
    ingredients: ["100% Alphonso Mango Pulp", "Natural Fruit Pectin", "Fresh Milk & Cream", "Diced Mango Bits"],
    image: "/images/icecream/mango-delight.jpg",
    badge: "Seasonal Special",
    calories: "185 kcal / scoop",
    accentColor: "#F97316",
    bgGradient: "from-orange-950/40 via-amber-950/20 to-[#0F0807]",
  },
  {
    id: "sundae-supreme",
    name: "Creamy Day Sundae Supreme",
    tagline: "Sundaes Ice Creams with hot fudge and toasted nuts.",
    category: "Sundaes",
    description:
      "An opulent multi-scoop crystal bowl featuring layers of vanilla, chocolate, and strawberry creams, bathed in hot chocolate fudge, roasted crushed almonds, and fresh whipped cream.",
    ingredients: ["Triple Scoop Medley", "Warm Fudge Ribbon", "Roasted Almonds & Hazelnuts", "Whipped Sweet Cream"],
    image: "/images/icecream/sundae-special.jpg",
    badge: "Parlor Signature",
    calories: "320 kcal / serving",
    accentColor: "#EC4899",
    bgGradient: "from-pink-950/40 via-purple-950/20 to-[#0F0807]",
  },
  {
    id: "pistachio-waffle",
    name: "Artisanal Waffle Cone Duo",
    tagline: "Freshly pressed crispy waffle cones with double scoops.",
    category: "Special Flavours",
    description:
      "Freshly baked golden waffle cone warm from the iron, cradling double scoops of roasted pistachio and rich dark chocolate with an irresistible chocolate dip drip.",
    ingredients: ["Roasted Bronte Pistachios", "Dark Chocolate", "Golden Waffle Batter", "Crushed Pistachio Topping"],
    image: "/images/icecream/waffle-cone.jpg",
    badge: "Hand-Crafted Cone",
    calories: "290 kcal / cone",
    accentColor: "#84CC16",
    bgGradient: "from-lime-950/40 via-emerald-950/20 to-[#0F0807]",
  },
];

export const menuCategories = [
  {
    name: "Cups, Flavours & Tubs",
    count: "12 Flavors",
    description: "Classic single scoops, double cups, and take-home half-liter tubs.",
    image: "/images/icecream/hero-scoop.jpg",
  },
  {
    name: "Sundaes & Delights",
    count: "6 Creations",
    description: "Decadent crystal bowl sundaes loaded with fudge, cherries & nuts.",
    image: "/images/icecream/sundae-special.jpg",
  },
  {
    name: "Bars & Juicy Sticks",
    count: "8 Varieties",
    description: "Real fruit juice refreshing sticks and Belgian chocolate dipped bars.",
    image: "/images/icecream/chocolate-brownie.jpg",
  },
  {
    name: "Family Pack Ice Creams",
    count: "4 Sizes",
    description: "Generous party tubs and family sharing blocks made for celebrating.",
    image: "/images/icecream/strawberry-swirl.jpg",
  },
];
