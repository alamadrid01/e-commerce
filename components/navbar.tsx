import React from "react";
import {
  Button,
  Container,
  Stack,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';

const Navbar = () => {
 
  return (
    <div>
      <Container maxWidth="lg" sx={{ backgroundColor: "primary.light", mb: "50px", p: "20px" }}>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "800" }}>
              AloyGallery
            </Typography>
            <Link href="#" underline="none" sx={{ fontWeight: "500" }}>
              HOME
            </Link>
            <Link href="#" underline="none"  color='text.secondary'>
              PRODUCTS
            </Link>
            <Link href="#" underline="none" color='text.secondary'>
              BLOG
            </Link>
            <Link href="#" underline="none" color='text.secondary'>
              ABOUT
            </Link>
          </Stack>

          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Button variant="contained" endIcon={<CallIcon />}>
              Contact Us
            </Button>
            <IconButton edge="start">
              <AccountCircleIcon/>
              <ShoppingCartIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default Navbar;
