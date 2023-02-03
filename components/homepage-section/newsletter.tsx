import React from 'react'
import Image from "next/image";
import axios from "axios"
import {
  Typography,
  Container,
  Stack,
  TextField,
  Box,
  InputProps,
  InputAdornment,
  IconButton
} from "@mui/material";
import { NearMe} from '@mui/icons-material/';

const Newsletter = () => {
    const clickHandler = () =>{
        alert("test")
    }
  return (
    <div>
          <Box sx={{ backgroundColor: "grey.100", mt: "96px", py: '50px' }}>
      <Container
        maxWidth="md"
      >
       <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
       <Typography
          variant="h4"
          align="center"
          color="text.secondary"
          sx={{ fontWeight: "600" }}
        >
          Keep Updated and Get Unlimited Discount
        </Typography>
        <Typography variant="subtitle1" align="center"gutterBottom>
          You better add your email for latest news from my website
        </Typography>
        <TextField
          placeholder="Email address"
          id="outlined-required"
          label="Email Address"
          variant="outlined"
          sx={{ width: '50%', borderRadius: "12px" }}
        InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} sx={{cursor: 'pointer'}} onClick={clickHandler}>
                <Typography variant="body1" sx={{ fontWeight: '600' }}>Subscribe </Typography>
                <IconButton color='info'>
                <NearMe />
                </IconButton>
                </Stack>
              </InputAdornment>
            ),
          }}
        />
       </Stack>
      </Container>
      </Box>
    </div>
  )
}

export default Newsletter