import { useProduct } from "../hooks/usePorducts";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Product from "../components/Product";
import { AppBar, Button, Container, Grid, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import SearchAppBar from "../components/SearchAppBar";
import Navigation from "../components/Navigation";

const MainPage = () => {
  const { loading, error, products } = useProduct();
  const [category, setCategory] = useState("all");

  const electronics = useMemo(
    () => products.filter((product) => product.category === "electronics"),
    [products]
  );
  const jewelery = useMemo(
    () => products.filter((product) => product.category === "jewelery"),
    [products]
  );
  const mensClothing = useMemo(
    () => products.filter((product) => product.category === "men's clothing"),
    [products]
  );
  const womensClothing = useMemo(
    () => products.filter((product) => product.category === "women's clothing"),
    [products]
  );

  const handleCategoryChange = (category:string) => {
    setCategory(category);
  };

  const selectedProducts = useMemo(() => {
    switch (category) {
      case "electronics":
        return electronics;
      case "jewelery":
        return jewelery;
      case "men's clothing":
        return mensClothing;
      case "women's clothing":
        return womensClothing;
      default:
        return products;
    }
  }, [category, electronics, jewelery, mensClothing, womensClothing, products]);

  return (
    <>
      {/* <SearchAppBar /> */}
      <Header />
      <Container
        maxWidth="lg"
        sx={{ alignItems: "center", justify: "center", textAlign: "center" }}
      >
        {loading && <Loader />}
        {error && <Error error={error} />}
        <Button
          sx={{
            textAlign: "center",
            backgroundColor: "#2B2D42",
            color: "#fff",
            marginLeft: "0.5rem",
            marginTop: "1rem",
            "&:hover": {
              backgroundColor: "#009585",
            },
          }}
          variant="contained"
          size="large"
          onClick={() => handleCategoryChange("all")}
        >
          All
        </Button>
        <Button
          sx={{
            textAlign: "center",
            backgroundColor: "#2B2D42",
            color: "#fff",
            marginLeft: "0.5rem",
            marginTop: "1rem",
            "&:hover": {
              backgroundColor: "#009585",
            },
          }}
          variant="contained"
          size="large"
          onClick={() => handleCategoryChange("electronics")}
        >
          Electronics
        </Button>
        <Button
          sx={{
            textAlign: "center",
            backgroundColor: "#2B2D42",
            color: "#fff",
            marginLeft: "0.5rem",
            marginTop: "1rem",
            "&:hover": {
              backgroundColor: "#009585",
            },
          }}
          variant="contained"
          size="large"
          onClick={() => handleCategoryChange("jewelery")}
        >
          Jewelery
        </Button>
        <Button
          sx={{
            textAlign: "center",
            backgroundColor: "#2B2D42",
            color: "#fff",
            marginLeft: "0.5rem",
            marginTop: "1rem",
            "&:hover": {
              backgroundColor: "#009585",
            },
          }}
          variant="contained"
          size="large"
          onClick={() => handleCategoryChange("men's clothing")}
        >
          Men's Clothing
        </Button>
        <Button
          sx={{
            textAlign: "center",
            backgroundColor: "#2B2D42",
            color: "#fff",
            marginLeft: "0.5rem",
            marginTop: "1rem",
            "&:hover": {
              backgroundColor: "#009585",
            },
          }}
          variant="contained"
          size="large"
          onClick={() => handleCategoryChange("women's clothing")}
        >
          Women's Clothing
        </Button>

        <Grid container spacing={2}>
          {selectedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default MainPage;
