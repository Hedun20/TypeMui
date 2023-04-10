import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { IProduct } from "../models";





export function useProduct() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const addProduct = (product: IProduct) => {
    setProducts((prev) => [...prev, product]);
  };

  const fetchProducts = async () => {
    try {
      setError("");
      setLoading(true);
      const respons = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products"
      );
      setProducts(respons.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error, loading, addProduct , setProducts};
}
