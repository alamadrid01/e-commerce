import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import furniture from "../../public/sofa.png";
import {
  Typography,
  Container,
  Stack,
  Button,
  Grid,
  Box,
  Rating,
  Paper
} from "@mui/material";

const Product = (props: any) => {
  const { data } = props;
  return (
    <div>
      <Box sx={{ mt: '40px' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{ color: "text.secondary", fontWeight: "600" }}
          >
            Products
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            <Stack direction="column" spacing={3} maxWidth="600px">
              <Typography
                variant="h4"
                sx={{ color: "text.secondary", fontWeight: "600" }}
              >
                Furniture
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                There are many variations of furniture available from cushion to
                sofa to chair, tables and lot more. We offer the at low cost
              </Typography>
              <Button variant="outlined" sx={{ maxWidth:'50%' }}>Shop Now</Button>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Image width={450} height={450} src={furniture} alt="furniture" />
            </Stack>
          </Stack>
          <Grid container spacing={3}>
            {data.map((items: any) => {
              return (
                <Grid key={items.id} item xs={6} md={3}>
                  <Link href={`/product/${items.id}`}>
                <Paper  elevation={1} sx={{ p: '20px' }}>
                    <Image src={`/${items.image}`} height={200} width={200} alt='best products' />
                    <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: '20px' }} >
                        <Rating 
                        value={items.rating}
                        readOnly />
                        <Typography variant="body1" color="primary.main" sx={{ fontWeight: '600' }}>{items.name}</Typography>
                        <Typography variant="body1" color="primary.main" sx={{ fontWeight: '600' }}>${items.price}</Typography>
                    </Stack>
                </Paper>
                </Link>
               </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Product;

export async function getStaticProps() {
  try {
    const response = await axios.get("http://localhost:4000/products");

    return {
      props: {
        data: response.data,
      },
    };
  } catch (err) {
    console.error(err);
  }
}
