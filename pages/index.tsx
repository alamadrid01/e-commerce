import React from "react";
import Image from "next/image";
import {
  IconButton,
  Typography,
  Container,
  Stack,
  Button,
  Paper,
  Link,
  Grid,
  TextField,
  Box
} from "@mui/material";
import Chair from "../public/chair.png";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoopIcon from "@mui/icons-material/Loop";
import Hero from "../components/homepage-section/hero";
import Collection from "../components/homepage-section/collection";
import Choose from "../components/homepage-section/choose";
import Product from "../components/homepage-section/product";
import Best from "../components/homepage-section/best";

const homepage = () => {

  return (
    <div>
      <Hero />
      <Collection />
      <Choose />
      <Best />
      <Product />

      <Box sx={{ backgroundColor: "grey.100", mt: "96px", py: '20px' }}>
      <Container
        maxWidth="md"
      >
       <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
       <Typography
          variant="h4"
          align="center"
          color="text.secondary"
          sx={{ fontWeight: "600" }}
        >
          Keep Updated and Get Unlimited Discount
        </Typography>
        <Typography variant="subtitle1" align="center">
          You better add your email for latest news from my website
        </Typography>
        {/* <TextField
          variant="filled"
          label="Enter your email address"
          required
          defaultValue="test"
        /> */}
        <TextField
          placeholder="Email address"
          id="outlined-required"
          label="Email Address"
          fullWidth
          sx={{ borderRadius: "12px" }}
        />
       </Stack>
      </Container>
      </Box>
    </div>
  );
};

export default homepage;
