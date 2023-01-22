import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import furniture from "../../public/sofa.png";
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
  Box,
} from "@mui/material";

const Product = (props: any) => {
  const { data } = props;
  console.log(data);
  return (
    <div>
      <Box>
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
              <Button variant="outlined">Shop Now</Button>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Image width={450} height={450} src={furniture} alt="furniture" />
            </Stack>
          </Stack>
          <Grid container spacing={3}>
            {data.map((items: any) => {
              return (
                <Grid key={items.id} item xs={4}>
                  <Link href={`/product/${items.id}`}>
                  <Box
                    sx={{
                      backgroundColor: "grey.100",
                      mb: "16px",
                      // "&:hover": {
                      //   backgroundColor: "primary.main",
                      //   opacity: [0.9, 0.8, 0.7],
                      // },
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Image
                        width={200}
                        height={200}
                        src={`/${items.image}`}
                        alt="furniture"
                      />
                    </Stack>
                  </Box>
                  </Link>
                  <Typography
                    variant="body1"
                    align="center"
                    sx={{ color: "text.secondary", fontWeight: "550" }}
                  >
                    {items.name}
                  </Typography>
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
