import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
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

const ProductId = (props: any) => {
  const { data } = props;
  return (
      <Box sx={{ mt: '60px' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{ color: "text.secondary", fontWeight: "600" }}
          >
            {data.name}
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
                {data.name}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                {data.description}
              </Typography>
              <Button variant="outlined" sx={{ maxWidth:'50%' }}>Shop Now</Button>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Image src={`/${data.image}`} alt="furniture" width={400} height={400} />
            </Stack>
          </Stack>
        </Container>
      </Box>
  );
};

export default ProductId;

export async function getStaticPaths() {
  const response = await axios.get("http://localhost:4000/products");
  const data = response.data;

  const paths = data.map((items: any) => {
    return {
      params: {
        productId: `${items.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { productId } = params;

  try {
    const response = await axios.get(
      `http://localhost:4000/products/${productId}`
    );
    const data = response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
