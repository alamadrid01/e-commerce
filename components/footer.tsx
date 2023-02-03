import React from "react";
import {
  Container,
  Stack,
  Grid,
  Typography,
  Link,
  IconButton,
  Box
} from "@mui/material";
import {  Twitter, LinkedIn, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  const linkColor = {
    color: "grey.400",
    fontWeight: '550'
  }
  return (
    <div>
      <Box sx={{ backgroundColor: "primary.main" }}>
      <Container maxWidth="lg" sx={{ mt: "96px", py: '36px' }}>
        <Stack direction="row" spacing={5} justifyContent="space-between" alignItems="center">
            <Stack direction="column" gap={8} >
              <Typography
                variant="h4"
                color="common.white"
                sx={{ fontWeight: "600" }}
                align="left"
                gutterBottom
              >
                Aloy Gallery
              </Typography>
              <Typography variant="body1"  sx={{ color: "grey.400",
                  fontWeight: '550' }} maxWidth="350px" align="left">
                We provide the best service all of the the world including
                antartica and also deliver across the universe including mars
                planet
              </Typography>
          </Stack>
              <Stack direction="row" justifyContent="space-around" gap={6}>
              <Stack direction="column" spacing={3}>
                <Typography
                  variant="h5"
                  color="common.white"
                  sx={{ fontWeight: "600" }}
                >
                  Products
                </Typography>
                <Link href=""><Typography variant="body1" color="grey.400" sx={{ textDecoration: 'none', fontWeight:"550" }}>Furniture</Typography> </Link>
                <Link href="" sx={linkColor}>Lights</Link>
                <Link href="" sx={linkColor}>Design</Link>
                <Link href="" sx={linkColor}>Men Wears</Link>
                <Link href="" sx={linkColor}>Lady Wears</Link>
              </Stack>
              <Stack direction="column" spacing={3}>
                <Typography
                  variant="h5"
                  color="common.white"
                  sx={{ fontWeight: "600" }}
                >
                  Get in touch
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "grey.400",
                  fontWeight: '550' }}
                >
                  Question or Feedback? We love to hear from you
                </Typography>
                <Stack direction="row" spacing={2}>
                  <IconButton color="info" size="large">
                    <LinkedIn />
                  </IconButton>
                  <IconButton color="info" size="large">
                    <Twitter />
                  </IconButton>
                  <IconButton color="info" size="large">
                    <WhatsApp />
                  </IconButton>
                </Stack>
              </Stack>
           </Stack>
          </Stack>
      </Container>
      </Box>
    </div>

  );
};

export default Footer;
