import React from "react";
import Image from "next/image";
import axios from "axios"
import {
  IconButton,
  Typography,
  Container,
  Stack,
  Button,
  Rating,
  Paper,
  Link,
  Grid,
  TextField,
  Box,
} from "@mui/material";

const Best = () => {
    const [data, setData] = React.useState<any>([])
    React.useEffect(() =>{
    const getBestProduct = async () =>{
        try{    
            const response = await axios.get("http://localhost:4000/products?rating=5")
            setData(response.data)
        }catch(err){
            console.error(err)
        }
    }
    getBestProduct()
}, [])

  return (
    <Box sx={{mt: '96px', backgroundColor: "primary.main", p:'60px 0' }}>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={6}>
        <Stack direction="column" spacing={4} justifyContent="center" sx={{ maxWidth:"400px" }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: "600" }}
            color="common.white"
          >
            Best Seller Products
          </Typography>
          <Typography variant="body1" color="common.white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ullamcorper congue eros
          </Typography>
          <Button variant="outlined" sx={{ border: '1px solid white', maxWidth:'50%' }} ><Typography variant="body1" color="common.white">See More</Typography></Button>
        </Stack>
        <Stack direction="row" spacing={3}>
            {
                data.map((items: any) => (
                    <Paper key={items.id} elevation={1} sx={{ p: '20px' }}>
                        <Image src={`/${items.image}`} height={200} width={200} alt='best products' />
                        <Stack direction="column" spacing={2} sx={{ mt: '20px' }}>
                            <Rating 
                            value={items.rating}
                            readOnly />
                            <Typography variant="body1" color="primary.main" sx={{ fontWeight: '600' }}>{items.name}</Typography>
                            <Typography variant="body1" color="primary.main" sx={{ fontWeight: '600' }}>${items.price}</Typography>
                        </Stack>
                    </Paper>
                ))
            }
        </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Best;
