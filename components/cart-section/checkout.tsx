import React from "react";
import {
  Typography,
  Box,
  Container,
  Stack,
  Button,
  TextField,
  Grid,
} from "@mui/material";

const Checkout = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Stack direction="column" spacing="4">
              <Typography
                align="center"
                variant="h2"
                color="text.secondary"
                sx={{ fontWeight: "600" }}
                gutterBottom
              >
                Checkout
              </Typography>
              <Typography
                align="center"
                variant="h3"
                color="text.secondary"
                sx={{ fontWeight: "600" }}
                gutterBottom
              >
                Who is placing this order?
              </Typography>
              <TextField
              variant="standard"
              type="email"
              label="Email"
              placeholder="example@email.com"
                />
              <TextField
              variant="standard"
              type="text"
              label="First Name"
              placeholder="First Name"
                />
              <TextField
              variant="standard"
              type="text"
              label="Last Name"
              placeholder="Last Name"
                />

                <Button variant="contained" sx={{color: 'common.white', borderRadius: '12px'}}>Proceed To Shipping</Button>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack direction="column" justifyContent="space-between" alignItems="space-between">
            <Stack direction="column" spacing={4}>
                <Stack direction="row" justifyContent="space-between">
                <Typography
                align="center"
                variant="subtitle1"
                color="text.secondary"
                sx={{ fontWeight: "600" }}
                gutterBottom
              >
                Items
              </Typography>
              <Typography
                align="center"
                variant="body1"
                color="grey.300"
                sx={{ fontWeight: "600" }}
                gutterBottom
              >
                Edit cart
              </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                   <Typography
                align="center"
                variant="body1"
                color="grey.300"
                sx={{ fontWeight: "600" }}
                gutterBottom
              >
                Item 1
              </Typography>
              <Stack direction="row" spacing="2">
              <Typography
                align="center"
                variant="body1"
                color="text.primary"
                sx={{ fontWeight: "600" }}
                gutterBottom
              >
                2X
              </Typography>
              <Typography
                align="center"
                variant="body1"
                color="text.primary"
                sx={{ fontWeight: "600" }}
                gutterBottom
              >
                $40
              </Typography>
              </Stack>
                </Stack>
            </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Checkout;
