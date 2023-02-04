import React from 'react'
import axios from 'axios'
import loginImage from "../../public/login.jpg"
import Router from 'next/router'
import Link from 'next/link'

import {
  IconButton,
  Typography,
  Container,
  Stack,
  Button,
  Paper,
  Grid,
  TextField,
  Input,
  FilledInput,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormHelperText,
  FormControl,
  Box
} from "@mui/material";
import { ArrowBack } from '@mui/icons-material'

const Cart = () => {
  return (
    <Box>
        <Container maxWidth="lg">
           <Stack direction = 'row' spacing={2}>
           <IconButton>
                <ArrowBack />
            </IconButton>
         <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.300"}} >BACK TO STORE</Typography>
           </Stack>
           <Stack direction="row" justifyContent="space-between">
        <Typography
          align="center"
          variant="h2"
          color="text.secondary"
          sx={{ fontWeight: "600" }}
          >
          Shopping Cart
        </Typography>
        <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.300"}} >3 items</Typography>
            </Stack>

            <Grid container sx={{mb: '20px'}}>
                <Grid item xs={6}>
        <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.300"}} >Item</Typography>
                </Grid>
                <Grid item xs={2}>
        <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.300"}} >Size</Typography>
                </Grid>
                <Grid item xs={2}>
        <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.300"}} >Quantity</Typography>
                </Grid>
                <Grid item xs={2}>
        <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.300"}} >Price</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{mb: '20px'}}>
                <Grid item xs={6}>
        <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.300"}} >Item</Typography>
                </Grid>
                <Grid item xs={2}>
        <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.300"}} >Size</Typography>
                </Grid>
                <Grid item xs={2}>
        <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.300"}} >Quantity</Typography>
                </Grid>
                <Grid item xs={2}>
        <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.300"}} >Price</Typography>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default Cart