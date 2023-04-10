import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Navigation from "./Navigation";
import { IProduct } from "../models";
import Product from "./Product";
import { Container, Grid } from "@mui/material";
import { text } from "stream/consumers";

const StyledAppBar = styled(AppBar)({
  background: "linear-gradient(45deg, #009585 30%, #2B2D42 90%)",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
});


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {

      const [searchTerm, setSearchTerm] = React.useState<string>("");
      const [products, setProducts] = React.useState<IProduct[]>([]);
      const [filteredProducts, setFilteredProducts] = React.useState<IProduct[]>([]);

      React.useEffect(() => {
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
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Navigation />

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Search>
        </Toolbar>
      </StyledAppBar>
      <Container sx={{alignItems:'center',alignContent:'center' }}>
        {filteredProducts.length > 0 ? (
          <Grid container spacing={2}>
            {" "}
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </Grid>
        ) : (
          <Typography variant="h1" gutterBottom>
            You Have Some Error
          </Typography>
        )}
      </Container>
    </Box>
  );
}
