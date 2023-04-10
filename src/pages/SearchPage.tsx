import { useState, useEffect } from "react";
import { TextField, Grid, Paper, InputAdornment, Theme, Typography, Card, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Product from "../components/Product";
import { IProduct } from "../models";
import SearchAppBar from "../components/SearchAppBar";



interface Props {}

const SearchPage: React.FC<Props> = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setFilteredProducts(json);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    
    <SearchAppBar/>

  );
};

export default SearchPage;
