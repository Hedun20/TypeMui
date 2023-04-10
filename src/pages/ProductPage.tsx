import { useProduct } from "../hooks/usePorducts";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link, useParams } from "react-router-dom";
import MuiLink from "@mui/material/Link";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  createTheme,
  ThemeProvider,
  makeStyles,
  Button,
  Container,
} from "@mui/material";
import Header from "../components/Header";

const ProductPage = () => {
  const { loading, error, products } = useProduct();
  const params = useParams();
  console.log(params);

  const prod = products.filter(
    (product) => product.id.toString() === params.id
  );

  return (
    <>
      <Header /> {loading && <Loader />}
      {error && <Error error={error} />}
      <Container
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {prod.map((product) => (
          <Card
            sx={{
              maxWidth: 500,
              marginTop: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
            <Link style={{ textDecoration: "none", color: "#fff" }} to={`/`}>
              <Button
                sx={{
                  textAlign: "center",
                  backgroundColor: "#009585",
                  color: "#fff",
                  marginRight: "0.5rem",
                  "&:hover": {
                    backgroundColor: "#2B2D42",
                  },
                }}
                variant="contained"
              >
                Main
              </Button>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to={`/product/feedback/${product.id}`}
              key={product.id}
            >
              <Button
                sx={{
                  textAlign: "center",
                  backgroundColor: "#009585",
                  color: "#fff",
                  marginLeft: "0.5rem",
                  "&:hover": {
                    backgroundColor: "#2B2D42",
                  },
                }}
                variant="contained"
              >
                Feedback
              </Button>
            </Link>
          </Card>
        ))}
      </Container>
    </>
  );
};

export { ProductPage };
