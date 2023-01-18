import React from "react";
import {
  Container,
  Stack,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: "96px" }}>
        <Grid container>
          <Grid item xs={6}>
            <Stack direction="column" justifyContent="center" alignItems='center'>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ fontWeight: "600" }}
              >
                Aloy Gallery
              </Typography>
              <Typography variant="subtitle1">
                We provide the best service all of the the world including
                antartica and also deliver across the universe including mars
                planet
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Stack direction="column" spacing={3}>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ fontWeight: "600" }}
                >
                  Products
                </Typography>
                <Link href="">Furniture</Link>
                <Link href="">Lights</Link>
                <Link href="">Design</Link>
                <Link href="">Electronics</Link>
                <Link href="">Electronics</Link>
              </Stack>
              <Stack direction="column" spacing={3}>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ fontWeight: "600" }}
                >
                  Products
                </Typography>
                <Link href="">Furniture</Link>
                <Link href="">Lights</Link>
                <Link href="">Design</Link>
                <Link href="">Electronics</Link>
                <Link href="">Electronics</Link>
              </Stack>
              <Stack direction="column" spacing={3}>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ fontWeight: "600" }}
                >
                  Products
                </Typography>
                <Link href="">Furniture</Link>
                <Link href="">Lights</Link>
                <Link href="">Design</Link>
                <Link href="">Electronics</Link>
                <Link href="">Electronics</Link>
              </Stack>
              {/* <Stack direction="column" spacing={3}>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ fontWeight: "600" }}
                >
                  Get in touch
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ fontWeight: "600" }}
                >
                  Question or Feedback? We`&apos` love to hear from you
                </Typography>
                <Stack direction="row" spacing={3}>
                  <IconButton>
                    <Facebook />
                  </IconButton>
                </Stack>
              </Stack> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
