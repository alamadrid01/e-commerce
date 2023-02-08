import React, {useContext} from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import {
  IconButton,
  Typography,
  Container,
  Stack,
  Button,
  Paper,
  Grid,
  Rating,
  Box,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
import {Add, Remove, Favorite, FavoriteBorder} from "@mui/icons-material"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useGlobalContext} from "../../context/context"

const ProductId = () => {
  const [value, setValue] = React.useState<string | number>('')
  const [heart, setHeart] = React.useState<boolean>(false)
  const [quantity, setQuantity] = React.useState<number>(0)
  const [data, setData] = React.useState<any>({})
  const Router = useRouter()
  // const {cartItem, setCartItem} = useGlobalContext()

  const productId = Router.query.productId

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  React.useEffect(() =>{
    const response = async () =>{
      try{
        const result = await axios.get(
          `http://localhost:4000/products/${productId}`
        );
        setData(result.data)
      }catch(err){
        console.error(err)
      }
    }
    response()
  },[])

  const getBase64 = (file: any) =>{
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    })
  }


  const handleCart = async () => {
    // setCartItem([...cartItem, {productId}])


    const cartItems = {
      productId, 
      size: value,
      quantity,
      email: "test@gmail.com",
      image: data.image
    }

    const config = {
      headers : {
        'Content-Type': 'application/json'
      }
    }

    try{
      const response = await axios.put("/api/cart", JSON.stringify(cartItems), config )
      console.log(response)
      if(response.status === 200) toast("Your Item has been added to cart")
    }catch(err){
      console.error(err)
    }
  }

  return (
      <Box sx={{ mt: '60px' }}>
        <ToastContainer />
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{ color: "text.secondary", fontWeight: "600" }}
          >
            {data.name}
          </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Image src={`/${data.image}`} alt="furniture" width={400} height={400} />
            </Stack>
            <Stack direction="column" spacing={3} maxWidth="600px" alignItems="end">
              <Typography
                variant="h4"
                sx={{ color: "text.secondary", fontWeight: "600" }}
              >
                {data.name}
              </Typography>
              <Typography variant="body1" align="right" sx={{ color: "text.secondary" }}>
                {data.description}
              </Typography>
              <Rating value={data.rating ?? " "} />
              <Stack direction="column" spacing={3} >
                <FormControl>
                  <FormLabel id="product-label" sx={{ fontWeight: '600' }}>
                    Size
                  </FormLabel>
                  <RadioGroup
                  name="sizes"
                  aria-labelledby="product-label"
                  row
                  value={value}
                  onChange={handleChange}
                  >
                    <FormControlLabel control={<Radio color="primary" />} label="small" value="small" />
                    <FormControlLabel control={<Radio color="primary" />} label="medium" value="medium" />
                    <FormControlLabel control={<Radio color="primary" />} label="large" value="large" />
                  </RadioGroup>
                </FormControl>
                <Typography variant="body1" sx={{ color: "text.secondary", fontWeight: '600' }}>Quantity</Typography>
                <Stack direction="row" spacing={3} alignItems="center">
                  <IconButton color="info" onClick={() => setQuantity(prev => prev + 1)}>
                    <Add />
                  </IconButton>
                  <Typography variant="body1" sx={{ color: "text.secondary", fontWeight: '600' }}>{quantity}</Typography>
                  <IconButton color="info" onClick= {() => setQuantity(prev => prev - 1 ) }>
                    <Remove />
                  </IconButton>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="space-between" spacing={4} sx={{ pt: '20px' }}>
              <Button variant="contained" sx={{ maxWidth:'100%', color: "white", borderRadius: '15px', p: '0 40px' }} onClick={handleCart}>Add to cart</Button>
              <IconButton color="error" onClick={() => setHeart(!heart)}>
                    {
                      heart ? <Favorite /> : <FavoriteBorder />
                    }
                  </IconButton>
                  </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
  );
};

export default ProductId;
