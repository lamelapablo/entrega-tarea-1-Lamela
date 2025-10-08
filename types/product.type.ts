export type Product = {
  id:          number;
  name:        string;
  price:       string;
  img:         string;
  description: string;
}

export type ProductPayload = Omit<Product, 'id'>