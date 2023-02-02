import React from "react";
import { Typography, Container, Button, Grid, Box } from "@mui/material";
import Chair from "../../public/chair.png";
import Wave from "../../public/wave.svg";
import Dot from "../../public/dot.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "primary.light",
          pt: "30px",
          color: "white",
          fontWeight: "700",
          height: "90vh",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="flex-start"
            sx={{ width: "100%", height: "100%" }}
          >
            <Grid item xs={5} container sx={{ mt: '30px', gap: '20px' }} >
              <Typography
                component="h1"
                variant="h3"
                align="left"
                color="text.primary"
                sx={{ fontWeight: "800" }}
                gutterBottom
              >
                Modern Interior Design Studio
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "500" }}
                align="left"
                color="text.secondary"
                paragraph
              >
                Something short and leading about the collection below its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don&apos;t simply skip over it entirely.
              </Typography>
              <Button variant="contained"><Typography variant="body1" color="common.white">SHOP NOW</Typography></Button>
            </Grid>

            <Grid
              item
              xs={7}
              container
              justifyContent="end"
              alignItems="center"
            >
              <Image
                src={Chair}
                width={500}
                height={600}
                alt="picture of the products"
              />
            </Grid>
          </Grid>
          {/* <Image src={Wave} height={400} width={500} alt='wave' /> */}
        </Container>
      </Box>
    </div>
  );
};

export default Hero;
