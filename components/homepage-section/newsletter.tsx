import React from 'react'
import Image from "next/image";
import axios from "axios"
import {
  Typography,
  Container,
  Stack,
  Button,
  TextField,
  Paper,
  Box,
} from "@mui/material";

const Newsletter = () => {
  return (
    <div>
          <Box sx={{ backgroundColor: "grey.100", mt: "96px", py: '20px' }}>
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
        <Typography variant="subtitle1" align="center">
          You better add your email for latest news from my website
        </Typography>
        {/* <TextField
          variant="filled"
          label="Enter your email address"
          required
          defaultValue="test"
        /> */}
        <TextField
          placeholder="Email address"
          id="outlined-required"
          label="Email Address"
          fullWidth
          sx={{ borderRadius: "12px" }}
        />
       </Stack>
      </Container>
      </Box>
    </div>
  )
}

export default Newsletter