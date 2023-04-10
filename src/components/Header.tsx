import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import Navigation from "./Navigation";

const StyledAppBar = styled(AppBar)({
  background: "linear-gradient(45deg, #009585 30%, #2B2D42 90%)",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
});

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Navigation/>
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
