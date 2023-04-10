import React, { useState } from "react";
import { useProduct } from "../hooks/usePorducts";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Rating,
  Typography,
} from "@mui/material";
import Header from "../components/Header";

const FeedbackPage = () => {
  const { loading, error, products } = useProduct();
  const [value, setValue] = useState<number | null>(2);
  const params = useParams();
  console.log(params);

  const prod = products.filter(
    (product) => product.id.toString() === params.id
  );

  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      <Header />
      <Container
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {prod.map((product) => (
          <Card sx={{ maxWidth: 500, marginTop: "1rem" }}>
            <CardMedia
              component="img"
              height="240"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                ${product.price}
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{
                  textAlign: "center",
                  backgroundColor: "#009585",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#2B2D42",
                  },
                }}
                variant="contained"
              >
                <Link
                  style={{ textDecoration: "none", color: "#fff" }}
                  to={`/`}
                >
                  Go Main
                </Link>
              </Button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="text" color="error">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Button>
            </Box>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default FeedbackPage;
