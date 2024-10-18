import { BriefcaseBusiness, CircleUserRound, Search } from "lucide-react";

export const NavItems = [
  {
    name: "categories",
    url: "/categories",
    active: true,
  },
  {
    name: "collections",
    url: "/collections",
  },
  {
    name: "store",
    url: "/store",
  },
  {
    name: "blog",
    url: "/blog",
  },
  {
    name: "find store",
    url: "/find-store",
  },
];

export const ItemInfo = {
  category: "Jolt / Jakets",
  name: "Boa Fleece Jacket",
  old_price: 129,
  current_price: 122,
  discount: 5,
  stars: 4,
  reviews: "12K",

  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

  images: [
    "/assets/black-jacket1.png",
    "/assets/black-jacket2.png",
    "/assets/black-jacket3.png",
    "/assets/black-jacket4.png",
  ],
  size: ["S", "M", "L", "XL"],
  color: ["#121212", "#0101AF", "#113C11"],
};

export const Colors = ["#121212", "#0101AF", "#113C11"];

export const Sizes = ["S", "M", "L", "XL"];

export const RecommendedItemsList = [
  {
    name: "Adidas x Jolt",
    price: 349,
    favorite: false,
    image: "/assets/adidas.png",
  },
  {
    name: "P.S Cap",
    price: 49,
    favorite: false,
    image: "/assets/cap.png",
  },
  {
    name: "OS Beanie",
    price: 20,
    favorite: true,
    image: "/assets/beanie.png",
  },
  {
    name: "NH X Hekknox Folding Tote",
    price: 39,
    favorite: true,
    image: "/assets/tote-bag.png",
  },
];
