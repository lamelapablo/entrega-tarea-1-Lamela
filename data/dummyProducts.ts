import { Product } from "@/types/product.type";

export const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$4,990",
    img: require("@/assets/images/headphones.png"),
    description: "Noise-cancelling headphones with long battery life and sleek design."
  },
  {
    id: 2,
    name: "Running Sneakers",
    price: "$12,500",
    img: require("@/assets/images/sneakers.webp"),
    description: "Lightweight sneakers with breathable mesh and cushioned soles."
  },
  {
    id: 3,
    name: "Smartwatch",
    price: "$9,800",
    img: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
    description: "Track your fitness and receive notifications with this stylish smartwatch."
  },
  {
    id: 4,
    name: "Travel Backpack",
    price: "$6,200",
    img: "https://images.pexels.com/photos/374574/pexels-photo-374574.jpeg",
    description: "Durable backpack with anti-theft features and USB charging port."
  },
  {
    id: 5,
    name: "LED Desk Lamp",
    price: "$3,450",
    img: "https://images.pexels.com/photos/716661/pexels-photo-716661.jpeg",
    description: "Smart LED lamp with adjustable brightness and color modes."
  }
];