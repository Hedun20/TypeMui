import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container } from "@mui/material";

const Navigation = () => {
  return (
    <Container>
      <nav>
        <span>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="text" color="inherit" style={{ color: "white" }}>
              Main
            </Button>
          </Link>
          <Link to="/search" style={{ textDecoration: "none" }}>
            <Button variant="text" color="inherit" style={{ color: "white" }}>
              Search
            </Button>
          </Link>
        </span>
      </nav>
    </Container>
  );
};

export default Navigation;
