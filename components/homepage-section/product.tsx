import React from 'react'
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
import Chair from "../../public/chair.png";

const Product = () => {
  return (
    <Box>
        <Container maxWidth="lg" sx={{ mt: "50px" }}>
        <Stack direction="row" justifyContent="space-between">
        <Typography align="center"  variant="h2" sx={{ fontWeight: "600" }} color="text.secondary">
            Our Products
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="">Trending Products</Link>
            <Link href="">New Arrival</Link>
            <Link href="">Flashy Sales</Link>
          </Stack>
        </Stack>
        <Grid container spacing={10} sx={{ mt: '20px' }}>
          <Grid
            item
            xs={4}
          >
            <Paper elevation={1} sx={{ backgroundColor: "grey.100" }}><Image width={250} height={250} src={Chair} alt="products" /></Paper>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <Paper elevation={1} sx={{ backgroundColor: "grey.100" }}><Image width={250} height={250} src={Chair} alt="products" /></Paper>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <Paper elevation={1} sx={{ backgroundColor: "grey.100" }}><Image width={250} height={250} src={Chair} alt="products" /></Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Product