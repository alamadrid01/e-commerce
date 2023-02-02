import React from 'react'
import {
    Typography,
    Container,
    Paper,
    Grid,
    Box
  } from "@mui/material";
  import Image from "next/image"
  import { experimentalStyled as styled } from "@mui/material/styles";
  import Chair from "../../public/chair.png";
  import axios from "axios"


const Collection = (props: any) => {
    const [data, setData] = React.useState<any>([])

    React.useEffect(() =>{
      const Datas =  async () =>{
        try {
            const response = await axios.get("http://localhost:4000/collections");
               setData(response.data)
            }catch (err) {
            console.error(err);
          }
      }
      Datas()
    }, [])
  return (
    <Box>
        <Container
        maxWidth="lg"
        sx={{ mt: "96px", py: "50px" }}
      >
        <Typography
          align="center"
          variant="h2"
          color="text.secondary"
          sx={{ fontWeight: "600" }}
        >
          New Collections
        </Typography>

        <Grid container spacing={3} sx={{ my: "35px" }}>
         {
          data.map((items: any) => (
            <Grid item md={4} xs={12} key={items.name}>
            <Paper elevation={2} variant="outlined" align="center" sx={{ p: "20px", backgroundColor: 'primary.light', borderRadius: '8px' }} >
                <Image src={`/${items.image}`} width={200} height={200} alt='product-images' />
                <Typography variant="h5" align="center" sx={{ backgroundColor: 'white', p: '6px' }}> {items.name} </Typography>
            </Paper>
          </Grid>
          ))
         }
        </Grid>
      </Container>
    </Box>
  )
}

export default Collection
