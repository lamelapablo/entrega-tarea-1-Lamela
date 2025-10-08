import { Product } from "@/types/product.type";
import { useEffect, useState } from "react";

const resolveServerImageUrls = function (products: Product[]): Product[] {
  return products.map((product: Product) => {
    if(!product.img.includes("http"))
      return {
        ...product,
        img: `${process.env.EXPO_PUBLIC_API_URL}/${product.img}`
      } as Product;
    return product;
  });
};

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | Error>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response: Response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/product`);
      if(!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(resolveServerImageUrls(data));
    } catch(err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, refetch: fetchProducts};
}