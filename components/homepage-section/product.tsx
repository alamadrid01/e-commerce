import React from 'react'
import Image from "next/image";
import {
  IconButton,
  Typography,
  Container,
  Stack,
  Button,
  Paper,
  Link,
  Grid,
  Rating,
  Box
} from "@mui/material";
import Chair from "../../public/chair.png";
import axios from "axios";

const Product = () => {
    const linkHover = {
    color: 'text.secondary',
    "&:hover": {
      borderBottom: '2px solid rgba(52, 37, 31, 1)',
      fontWeight: '600',
    }
   }

   const [data, setData] = React.useState<any>([])
   React.useEffect(() =>{
   const getBestProduct = async () =>{
       try{    
           const response = await axios.get("http://localhost:4000/products")
           setData(response.data)
       }catch(err){
           console.error(err)
       }
   }
   getBestProduct()
}, [])
  return (
    <Box>
        <Container maxWidth="lg" sx={{ mt: "50px" }}>
        <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography align="center"  variant="h2" sx={{ fontWeight: "600" }} color="text.secondary" gutterBottom>
            Our Products
          </Typography>
          <Stack direction="row" spacing={3}>
          <Link href="#" underline="none" sx={{borderBottom: '2px solid rgba(52, 37, 31, 1)', fontWeight: '600',}}  >
              Trending Products
            </Link>
          <Link href="#" underline="none" sx={[linkHover]}  >
              New Arrival
            </Link>
          <Link href="#" underline="none" sx={[linkHover]}  >
              Flashy Sales
            </Link>
          </Stack>
        </Stack>
        <Grid container spacing={10} sx={{ mt: '20px' }}>
        {
                data.map((items: any) => (
                   <Grid key={items.id} item xs={6} md={3}> 
                    <Paper  elevation={1} sx={{ p: '20px' }}>
                        <Image src={`/${items.image}`} height={200} width={200} alt='best products' />
                        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: '20px' }} >
                            <Rating 
                            value={items.rating}
                            readOnly />
                            <Typography variant="body1" color="primary.main" sx={{ fontWeight: '600' }}>{items.name}</Typography>
                            <Typography variant="body1" color="primary.main" sx={{ fontWeight: '600' }}>${items.price}</Typography>
                        </Stack>
                    </Paper>
                   </Grid>
                ))
            }
        </Grid>
      </Container>
    </Box>
  )
}

export default Product