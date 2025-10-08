import { Product, ProductPayload } from '@/types/product.type';
import { useState } from 'react';

export function useCreateProduct() {
  const [error, setError] = useState<null | Error>(null);

  const createProduct = async (product: ProductPayload): Promise<Product|null> => {
    setError(null);

    const formData: FormData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);

    const filename = product.img.split('/').pop() || 'image.jpg';
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : `image`;

    formData.append('img', {
      uri: product.img,
      name: filename,
      type,
    } as any);

    try {
      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/product`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (!res.ok) throw new Error('Failed to create product');
      const createdProduct: Product = await res.json();
      return createdProduct;
    } catch (err) {
      setError(err as Error);
      return null;
    }
  };

  return { createProduct, error };
}