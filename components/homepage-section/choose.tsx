import React from 'react'
import axios from "axios"
import {
    Box,
    Typography,
    Grid,
    IconButton,
    Container,
    Paper,
    Stack
} from "@mui/material"
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoopIcon from "@mui/icons-material/Loop";
import Image from "next/image"
import Chair from "../../public/chair.png";

const Choose = () => {
    const [data, setData] = React.useState<any>([])
    React.useEffect(() =>{
        const getCart = async () =>{
             try{
                const response = await axios.get("http://localhost:4000/carts");
                setData(response.data)
            }catch(err){
                console.error(err)
            }
        }
        getCart()
    }, [])
  return (
    <Box>
      <Container maxWidth="lg" sx={{ mt: '96px' }}>
        <Stack direction="row" spacing={10} >
        <Stack direction="row" justifyContent="center" alignItems="center" >
            <Image width={550} height={550} src={Chair} alt="picture" />
          </Stack>
          <Stack direction="column" spacing={4}  >
            <Typography align="center"  variant="h2" sx={{ fontWeight: "600" }} color="text.secondary">
              Why Choose Us
            </Typography>
            <Grid container spacing={5}>
                {
                    data.map((items: any) =>(
                     <Grid key={Math.random()} item md={6} xs={12} >
                         <Paper elevation={1} sx={{p:'15px' }} >
                            <IconButton size="small" color="primary">
                              <LocalShippingIcon/>
                            </IconButton>
                            <Typography variant="h6" sx={{ fontWeight: '550' }} gutterBottom>{items.data}</Typography>
                            <Typography variant="body1" >{items.description}</Typography>
                        </Paper>
                        </Grid>
                    ))
                }
            </Grid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Choose
