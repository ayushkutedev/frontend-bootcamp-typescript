interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 599 },
  { id: 3, name: "Tablet", price: 399 },
];

// TypeScript knows the type!
products.forEach((product: Product) => {
  console.log(product.name); // Autocomplete works!
});

// Filter with types
const affordable = products.filter((p: Product) => p.price < 500);