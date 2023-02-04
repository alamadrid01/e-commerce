import React from 'react'
import axios from 'axios'
import Image from "next/image"
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
  Box
} from "@mui/material";
import { ArrowBack, Clear } from '@mui/icons-material'

const Cart = () => {
        const [items, setItems] = React.useState([])
        React.useEffect(() =>{
                const getItems = async () => {
                        try{    
                                const response = await axios.get("http://localhost:4000/products")
                                setItems(response.data.slice(0, 3))
                                console.log(items)
                            }catch(err){
                                console.error(err)
                            }
                }
                getItems()
        }, [])
  return (
    <Box sx={{ mt: '40px' }}>
        <Container maxWidth="lg">
           <Stack direction = 'row' spacing={1} alignItems="center">
           <IconButton>
                <ArrowBack />
            </IconButton>
         <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.400"}} >BACK TO STORE</Typography>
           </Stack>
           <Grid container spacing={3}>
                <Grid item xs ={9}>
           <Stack direction="row" justifyContent="space-between">
        <Typography
          align="center"
          variant="h3"
          color="text.secondary"
          sx={{ fontWeight: "600", mt: '20px' }}
          >
          Shopping Cart
        </Typography>
        <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.400"}} >3 items</Typography>
            </Stack>

            <Grid container sx={{my: '50px'}}>
                <Grid item xs={6}>
        <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.400"}} >Items</Typography>
                </Grid>
                <Grid item xs={2}>
        <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.400"}} >Size</Typography>
                </Grid>
                <Grid item xs={2}>
        <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.400"}} >Quantity</Typography>
                </Grid>
                <Grid item xs={2}>
        <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.400"}} >Price</Typography>
                </Grid>
            </Grid>

            {
                items.map((item: any) => (
                        <Grid container key={item.id} sx={{my: '20px'}}>
                        <Grid item xs={6}>
                        <Stack direction="row" spacing={4} >
                                <Image src={`/${item.image}`} width={100} height={100} alt="items image" />
                                <Stack direction="column" spacing={1}>
                                <Typography  variant = "body1" sx={{fontWeight: '600', color: "text.secondary,", fontSize: '18px' }} >{item.name}</Typography>
                                <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.400" }} >{item.category}</Typography>
                                </Stack>
                        </Stack>
                        </Grid>
                        <Grid item xs={2}>
                <Typography  variant = "body1" sx={{fontWeight: '600', color: "text.secondary,", fontSize: '18px'}} >small</Typography>
                        </Grid>
                        <Grid item xs={2}>
                <Typography  variant = "body1" sx={{fontWeight: '600', color: "text.secondary,", fontSize: '18px'}} >3</Typography>
                        </Grid>
                        <Grid item xs={2}>
                        <Stack direction="row" alignItems="center" spacing={4}>
                        <Typography  variant = "body1" sx={{fontWeight: '600', color: "text.secondary,", fontSize: '18px'}} >${item.price}</Typography>
                        <IconButton size="small" color="primary">
                                <Clear />
                        </IconButton>
                        </Stack>
                        </Grid>
                    </Grid>
                ))
            }
             </Grid>
             <Grid item xs={3}>
                <Stack direction="column" spacing={4} sx={{ px: "15px", backgroundColor: 'grey.100' }}>
                <Typography  variant = "h5" sx={{fontWeight: '600', color: "text.secondary,"}} >Summary</Typography>

                </Stack>
             </Grid>
           </Grid>
        </Container>
    </Box>
  )
}

export default Cart