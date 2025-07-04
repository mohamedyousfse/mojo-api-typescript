import { products } from "../database/db";
import { Product } from "../models/product";

export function createProduct(product: Product) {
  products.push(product);
  return product;
}

export function getAllProducts() {
  return products;
}
export function getProductById(id: number) {
  return products.find((product) => product.id === id);
}
export function updateProduct(id: number, updatedProduct: Partial<Product>) {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) return null;

  const existingProduct = products[productIndex];
  const newProduct = { ...existingProduct, ...updatedProduct };
  products[productIndex] = newProduct;
  return newProduct;
}