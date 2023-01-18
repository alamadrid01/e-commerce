import React from "react";
import Image from "next/image";
import { experimentalStyled as styled } from "@mui/material/styles";
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
} from "@mui/material";
import Chair from "../public/chair.png";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoopIcon from "@mui/icons-material/Loop";

const homepage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "grey.100",
          pt: "30px",
          borderRadius: 3,
          color: "white",
          fontWeight: "700",
          height: "80vh",
        }}
      >
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", height: "100%" }}
        >
          <Grid item xs={5} container justifyContent="center">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Modern Interior Design Studio
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "550" }}
              align="center"
              color="text.secondary"
              paragraph
            >
              Something short and leading about the collection below its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Button variant="outlined">SHOP NOW</Button>
          </Grid>

          <Grid item xs={7} container justifyContent="end" alignItems="center">
            <Image
              src={Chair}
              width={500}
              height={600}
              alt="picture of the products"
            />
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: "grey.100", mt: "96px", py: "50px" }}
      >
        <Typography
          align="center"
          variant="h2"
          color="text.secondary"
          sx={{ fontWeight: "600" }}
        >
          Our Collections
        </Typography>

        <Grid container spacing={3} sx={{ my: "35px" }}>
          <Grid item xs={3}>
            <Item
              sx={{
                border: 3,
                borderColor: "common.white",
                backgroundColor: "grey.100",
              }}
            >
              <Image width={200} height={200} src={Chair} alt="icon" />
              <Typography
                variant="h6"
                color="text.primary"
                sx={{ fontWeight: "550" }}
              >
                Decorations
              </Typography>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item
              sx={{
                border: 3,
                borderColor: "common.white",
                backgroundColor: "grey.100",
              }}
            >
              <Typography
                variant="h6"
                color="text.primary"
                sx={{ fontWeight: "550" }}
              >
                Lights
              </Typography>
              <Image width={200} height={200} src={Chair} alt="icon" />
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item
              sx={{
                border: 3,
                borderColor: "common.white",
                backgroundColor: "grey.100",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Typography
                  variant="h6"
                  color="text.primary"
                  sx={{ fontWeight: "550" }}
                >
                  Furniture
                </Typography>
                <Image width={200} height={200} src={Chair} alt="icon" />
              </Stack>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item
              sx={{
                border: 3,
                borderColor: "common.white",
                backgroundColor: "grey.100",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Typography
                  variant="h6"
                  color="text.primary"
                  sx={{ fontWeight: "550" }}
                >
                  Interior Design
                </Typography>
                <Image width={200} height={200} src={Chair} alt="icon" />
              </Stack>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item
              sx={{
                border: 3,
                borderColor: "common.white",
                backgroundColor: "grey.100",
              }}
            >
              <Typography
                variant="h6"
                color="text.primary"
                sx={{ fontWeight: "550" }}
              >
                Electronics
              </Typography>
              <Image width={200} height={200} src={Chair} alt="icon" />
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item
              sx={{
                border: 3,
                borderColor: "common.white",
                backgroundColor: "grey.100",
              }}
            >
              <Image width={200} height={200} src={Chair} alt="icon" />
              <Typography
                variant="h6"
                color="text.primary"
                sx={{ fontWeight: "550" }}
              >
                Wears
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container>
          <Grid xs={6} item container direction="column" alignContent="center">
            <Typography variant="h3" color="text.secondary">
              Why Choose Us
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Why Choose Us
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <IconButton size="large" color="success">
                  <LocalShippingIcon />
                </IconButton>
                <Typography variant="body1" sx={{ fontWeight: "600" }}>
                  Fast & Free Shipping
                </Typography>
                <Typography variant="subtitle2">
                  We deliver at the right time and our shipping cost 0 dime
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <IconButton size="large" color="success">
                  <ShoppingCartIcon />
                </IconButton>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Fast & Free Shipping
                </Typography>
                <Typography variant="subtitle2">
                  We deliver at the right time and our shipping cost 0 dime
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <IconButton size="large" color="success">
                  <LocalShippingIcon />
                </IconButton>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Fast & Free Shipping
                </Typography>
                <Typography variant="subtitle2">
                  We deliver at the right time and our shipping cost 0 dime
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <IconButton size="large" color="success">
                  <LoopIcon />
                </IconButton>
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Fast & Free Shipping
                </Typography>
                <Typography variant="subtitle2">
                  We deliver at the right time and our shipping cost 0 dime
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} item>
            <Image width={600} height={600} src={Chair} alt="picture" />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ mt: "50px" }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h3" color="text.primary">
            Our Products
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="">Trending Products</Link>
            <Link href="">New Arrival</Link>
            <Link href="">Flashy Sales</Link>
          </Stack>
        </Stack>
        <Grid container direction="row" spacing={3} sx={{ mt: "50px" }}>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ backgroundColor: "grey.100" }}
          >
            <Image width={250} height={250} src={Chair} alt="products" />
          </Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ backgroundColor: "grey.100" }}
          >
            <Image width={250} height={250} src={Chair} alt="products" />
          </Grid>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
            sx={{ backgroundColor: "grey.100" }}
          >
            <Image width={250} height={250} src={Chair} alt="products" />
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="md"
        sx={{ backgroundColor: "primary.light", mt: "96px" }}
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
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
       </Stack>
      </Container>
    </div>
  );
};

export default homepage;
