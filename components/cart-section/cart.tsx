  import React, { useContext } from "react";
import axios from "axios";
import Image from "next/image";
import loginImage from "../../public/login.jpg";
import Router from "next/router";
import Link from "next/link";

import {
  IconButton,
  Typography,
  Container,
  Stack,
  Button,
  Paper,
  Grid,
  Box,
} from "@mui/material";
import { ArrowBack, Clear } from "@mui/icons-material";
import { useGlobalContext } from "../../context/context";

const Cart = () => {
  // const { cartItem } = useGlobalContext();
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    const getItems = async () => {
            try{
                    const response = await axios.get("http://localhost:4000/products")
                    setItems(response.data.slice(0, 3))
                }catch(err){
                    console.error(err)
                }
    }
    getItems()

//     const data = {
//       email: "test@gmail.com",
//     };

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const getItems = async () => {
//       try {
//         const response = await axios.post(
//           `http://localhost:4000/cart/${id}`,
//           JSON.stringify(data),
//           config
//         );
//         setItems(response.data);
//         console.log(items);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     getItems();
  }, []);

  const handleDelete = async (id: any) =>{
    const data = {
      email: "test@gmail.com"
    }
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
        try{
          const result = await axios.post(`/api/cart/${id}`, JSON.stringify(data), config)
          alert(result.status)

        }catch(err){
           alert('Unable to delete the items')
           console.error(err)
        }
  }
  return (
    <Box sx={{ mt: "40px" }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ cursor: "pointer" }}
          onClick={() => Router.push("/")}
        >
          <IconButton>
            <ArrowBack />
          </IconButton>
          <Typography
            variant="body1"
            sx={{ fontWeight: "600", color: "grey.400" }}
          >
            BACK TO STORE
          </Typography>
        </Stack>
        <Grid container spacing={4}>
          <Grid item xs={9}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                align="center"
                variant="h3"
                color="text.secondary"
                sx={{ fontWeight: "600", mt: "20px" }}
              >
                Shopping Cart
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "600", color: "grey.400" }}
              >
                3 items
              </Typography>
            </Stack>

            <Grid container sx={{ my: "50px" }}>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "600", color: "grey.400" }}
                >
                  Items
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "600", color: "grey.400" }}
                >
                  Size
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "600", color: "grey.400" }}
                >
                  Quantity
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "600", color: "grey.400" }}
                >
                  Price
                </Typography>
              </Grid>
            </Grid>

            {items.map((item: any) => (
              <Grid container key={item.id} sx={{ my: "20px" }}>
                <Grid item xs={6}>
                  <Stack direction="row" spacing={4}>
                    <Image
                      src={`/${item.image}`}
                      width={100}
                      height={100}
                      alt="items image"
                    />
                    <Stack direction="column" spacing={1}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "600",
                          color: "text.secondary,",
                          fontSize: "18px",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "600", color: "grey.400" }}
                      >
                        {item.category}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={2}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "600",
                      color: "text.secondary,",
                      fontSize: "18px",
                    }}
                  >
                    small
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "600",
                      color: "text.secondary,",
                      fontSize: "18px",
                    }}
                  >
                    3
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Stack direction="row" alignItems="center" spacing={4}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "600",
                        color: "text.secondary,",
                        fontSize: "18px",
                      }}
                    >
                      ${item.price}
                    </Typography>
                    <IconButton size="small" color="primary" onClick={() => handleDelete(item.id)}>
                      <Clear />
                    </IconButton>
                  </Stack>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={3}>
            <Stack
              direction="column"
              alignItems="space-between"
              justifyContent="space-between"
              sx={{
                p: "20px 15px",
                height: "90vh",
                backgroundColor: "primary.light",
                borderRadius: "12px",
              }}
            >
              <Stack direction="column" spacing={4}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "600", color: "text.secondary," }}
                >
                  Summary
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: "1px" }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "600", color: "text.secondary," }}
                  >
                    Subtotal
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "600", color: "text.secondary," }}
                  >
                    $400
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: "1px" }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "600", color: "text.secondary," }}
                  >
                    Shipping
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "600", color: "text.secondary," }}
                  >
                    $0
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: "1px" }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "600", color: "text.secondary," }}
                  >
                    Tax
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "600", color: "text.secondary," }}
                  >
                    $20
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction="column" spacing={3}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: "1px" }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "600", color: "text.secondary," }}
                  >
                    Total
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "600", color: "text.secondary," }}
                  >
                    $420
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  sx={{ color: "common.white" }}
                  onClick={() => Router.push("/checkout")}
                >
                  CHECKOUT
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cart;
