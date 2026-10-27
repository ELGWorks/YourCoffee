
type Product = {
  id: number;
  name: string;
  type: "food" | "drink";
  price: number;
  image: string;
};

export const products: Product[] = [
  // Drinks
  {
    id: 1,
    name: "Iced Brown Sugar Oat Latte",
    type: "drink",
    price: 120.0,
    image: "/images/products/sample_image_1.webp",
  },
  {
    id: 2,
    name: "Caramel Macchiato",
    type: "drink",
    price: 145.0,
    image: "/images/products/sample_image_1.webp",
  },
  {
    id: 3,
    name: "Classic Iced Americano",
    type: "drink",
    price: 95.0,
    image: "/images/products/sample_image_1.webp",
  },
  {
    id: 4,
    name: "Spanish Latte",
    type: "drink",
    price: 135.0,
    image: "/images/products/sample_image_1.webp",
  },
  {
    id: 5,
    name: "Matcha Green Tea Latte",
    type: "drink",
    price: 140.0,
    image: "/images/products/sample_image_1.webp",
  },

  // Food
  {
    id: 6,
    name: "Butter Croissant",
    type: "food",
    price: 85.0,
    image: "/images/products/sample_image_1.webp",
  },
  {
    id: 7,
    name: "Chocolate Chip Cookie",
    type: "food",
    price: 55.0,
    image: "/images/products/sample_image_1.webp",
  },
  {
    id: 8,
    name: "Blueberry Cheesecake",
    type: "food",
    price: 150.0,
    image: "/images/products/sample_image_1.webp",
  },
  {
    id: 9,
    name: "Ham and Cheese Sandwich",
    type: "food",
    price: 125.0,
    image: "/images/products/sample_image_1.webp",
  },
  {
    id: 10,
    name: "Chocolate Fudge Brownie",
    type: "food",
    price: 75.0,
    image: "/images/products/sample_image_1.webp",
  },
];
