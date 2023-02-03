import React from "react";
import Image from "next/image";
import axios from "axios"
import Chair from "../../public/chair.png";
import {
  Typography,
  Container,
  Stack,
  Button,
  Paper,
  Box,
} from "@mui/material";

const Deals = () => {
  return (
    <Box sx={{mt: '96px', backgroundColor: "primary.light", p:'60px 0' }}>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={20}>
        <Stack direction="column" spacing={4} justifyContent="center" sx={{ maxWidth:"500px" }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "600" }}
            color="primary.main"
          >
            Deals Of The Day
          </Typography>
          <Typography variant="body1" color="primary.main">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper
          </Typography>
          <Stack direction ="row" spacing={3}>
            <Paper elevation={1} sx={{ p: '18px' }}>
                <Typography variant='h4' sx={{ fontWeight: '600' }}>08</Typography>
                Days
            </Paper>
            <Paper elevation={1} sx={{ p: '18px' }}>
                <Typography variant='h4' sx={{ fontWeight: '600' }}>08</Typography>
                Hours
            </Paper>
            <Paper elevation={1} sx={{ p: '18px' }}>
                <Typography variant='h4' sx={{ fontWeight: '600' }}>08</Typography>
                Min
            </Paper>
          </Stack>
          <Button variant="contained" sx={{ maxWidth:'50%' }} ><Typography variant="body1" color="common.white">Shop Now</Typography></Button>
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center" >
            <Image src={Chair} width={400} height={400}  alt="best deal" />
        </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Deals;
