import { createProduct, getAllProducts } from "./controllers/productController";

createProduct({ id: 1, name: "Mojo T-shirt", price: 100 });
createProduct({ id: 2, name: "Mojo Cap", price: 50 });

console.log("📦 كل المنتجات:");
console.log(getAllProducts());
