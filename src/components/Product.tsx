import { Link, useParams } from "react-router-dom";
import { IProduct } from "../models";
import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

interface ProductProps {
  product: IProduct;
  key: number;
}

const Product = ({ product }: ProductProps) => {
  return (
    <Grid item xs={6} margin="2">
      <Card sx={{ maxWidth: 500, mt: 2, mb: 2 }}>
        <CardMedia
          sx={{ height: 240 }}
          image={product.image}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
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
              to={`/product/${product.id}`}
              key={product.id}
            >
              Show More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
