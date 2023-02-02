import React from "react";
import Router from "next/router";
import {
  Button,
  Container,
  Stack,
  Typography,
  IconButton,
  Link,
  Box
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';

const Navbar = () => {
  const linkHover = {
    color: 'text.secondary',
    fontWeight: '600',
    "&:hover": {
      borderBottom: '2px solid primary.main',
      color: "gray"
    }
   }
  return (
    <div>
      <Box sx={{ backgroundColor: "primary.light",  p: "20px" }}>
      <Container maxWidth="lg"  >
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
            <Link href="#" underline="none" sx={[linkHover]}  >
              HOME
            </Link>
            <Link href="#" underline="none"   sx={[linkHover]}  >
              PRODUCTS
            </Link>
            <Link href="#" underline="none"  sx={[linkHover]}  >
              BLOG
            </Link>
            <Link href="#" underline="none" sx={[linkHover]} > 
              ABOUT
            </Link>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button variant="outlined" startIcon={<CallIcon />}>
              Contact Us
            </Button>
            <IconButton edge="start" size='large' onClick={() => Router.push('/login')}>
              <AccountCircleIcon/>
            </IconButton>
            <IconButton edge="end" size='large'>
            <ShoppingCartIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
      </Box>
    </div>
  );
};

export default Navbar;
