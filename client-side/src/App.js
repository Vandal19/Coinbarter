import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ResponsiveAppBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";

import Products from "./components/products";
import { Box, Button, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import NavBar from "./components/navbar/index.js";
import Footer from "./components/Footer";
import Banner from "./components/banner";
import Slider from "./components/slider";
import MobileMenu from "./components/drawer";
import { UIProvider } from "./context/ui";

function App() {
  const [name, setName] = useState("");
  const [home, setHome] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/home").then((res) => {
      setHome(res.data);
    });
  }, []);

  async function postName(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/post_name", {
        name,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <UIProvider>
          <NavBar />
          <Banner />
          <Slider />
          <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
            <Typography variant="h4">Our Products</Typography>
          </Box>
          <Products />
          <Footer />
          <MobileMenu />
        </UIProvider>
        {/*
      Title
      Products
      Footer
      Searchbox
    */}
        {/* <ResponsiveAppBar /> */}
          {/* <Router>
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
          </Router> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
