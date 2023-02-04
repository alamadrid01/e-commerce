import React from "react";
import axios from 'axios';
import {
  Typography,
  Box,
  Container,
  Stack,
  Button,
  TextField,
  IconButton,
  Grid,
} from "@mui/material";

const Checkout = () => {
  const [items, setItems] = React.useState([])
  const [show, setShow] = React.useState(true)
  const [showSecond, setShowSecond] = React.useState(false)
  const [showThird, setThirdShow] = React.useState(false)
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

  const nextPage = () =>{
    setShow(false)
    setShowSecond(true)
  }

  const upperPage =() =>{
    setShowSecond(false)
    setThirdShow(true)
  }
  return (
    <Box sx={{ mt: '50px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={2}>
          <Typography
                align="center"
                variant="h5"
                color="text.secondary"
                sx={{ fontWeight: "600" }}
                gutterBottom
              >
                Checkout
              </Typography>
          </Grid>
          {
            show && 
            <Grid item xs={7}>
            <Stack direction="column" spacing="4" >
              <Typography
                align="center"
                variant="h4"
                color="text.secondary"
                sx={{ fontWeight: "600" }}
                gutterBottom
              >
                Who is placing this order?
              </Typography>
              <Stack direction="column" spacing={5} sx={{ pb: '40px', pt: '50px' }}>
              <TextField
              variant="standard"
              type="email"
              label="Email"
              placeholder="example@email.com"
                />
              <Stack direction="row" justifyContent="space-between" spacing={5}>
              <TextField
              variant="standard"
              type="text"
              label="First Name"
              placeholder="First Name"
              fullWidth
                />
              <TextField
              variant="standard"
              type="text"
              label="Last Name"
              placeholder="Last Name"
              fullWidth
                />
              </Stack>
                </Stack>

                <Button variant="contained" sx={{color: 'common.white', borderRadius: '12px', maxWidth:'50%', py:'9px'}} onClick={nextPage}>Proceed To Shipping</Button>
            </Stack>
          </Grid>
            }
          {showSecond &&
           
          <Grid item xs={7}>
            <Stack direction="column" spacing="4" >
              <Typography
                align="center"
                variant="h4"
                color="text.secondary"
                sx={{ fontWeight: "600" }}
                gutterBottom
              >
                Where would you like your order sent?
              </Typography>
              <Stack direction="column" spacing={5} sx={{ pb: '40px', pt: '50px' }}>
              <TextField
              variant="standard"
              required
              type="text"
              label="Country"
                />
              <TextField
              variant="standard"
              required
              type="text"
              label="Address"
                />
              <Stack direction="row" justifyContent="space-between" spacing={5}>
              <TextField
              variant="standard"
              required
              type="text"
              label="City"
              fullWidth
                />
              <TextField
              variant="standard"
              required
              type="text"
              label="Zip code"
              fullWidth
                />
              </Stack>
              <TextField
              variant="standard"
              required
              type="text"
              label="State/Province"
                />
                <TextField
              variant="standard"
              required
              type="tel"
              label="Phone Number"
              placeholder="+234 123456789"
                />
                </Stack>
  
                <Button variant="contained" sx={{color: 'common.white', borderRadius: '12px', maxWidth:'50%', py:'9px'}} onClick={upperPage}>Proceed To payment</Button>
            </Stack>
          </Grid>
          }
           {
              showThird && 
              <Grid item xs={7}>
              <Stack direction="column" spacing="4" >
                <Typography
                  align="center"
                  variant="h4"
                  color="text.secondary"
                  sx={{ fontWeight: "600" }}
                  gutterBottom
                >
                  Payment Section
                </Typography>
                <Stack direction="column" spacing={5} sx={{ pb: '40px', pt: '50px' }}>
                <TextField
                variant="standard"
                type="email"
                label="Email"
                placeholder="example@email.com"
                  />
                <Stack direction="row" justifyContent="space-between" spacing={5}>
                <TextField
                variant="standard"
                type="text"
                label="First Name"
                placeholder="First Name"
                fullWidth
                  />
                <TextField
                variant="standard"
                type="text"
                label="Last Name"
                placeholder="Last Name"
                fullWidth
                  />
                </Stack>
                  </Stack>
  
                  <Button variant="contained" sx={{color: 'common.white', borderRadius: '12px', maxWidth:'50%', py:'9px'}} onClick={upperPage}>Proceed To Shipping</Button>
              </Stack>
            </Grid>
            }
          <Grid item xs={3}>
          <Stack direction= "column" alignItems="space-between" justifyContent="space-between" sx={{ p: "20px 15px", height:'90vh', backgroundColor: 'primary.light', borderRadius: '12px' }}>
                <Stack direction="column" spacing={4} >
                
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: '1px' }}>
                <Typography  variant = "h5" sx={{fontWeight: '600', color: "text.secondary,"}} >Items</Typography>
                        <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.400"}} >Edit cart</Typography>
                </Stack>
                {
                items.map((item: any) => (
                        <Grid container key={item.id} sx={{my: '20px'}} >
                        <Grid item xs={8}>
                        <Stack direction="row" spacing={4} >
                                <Stack direction="column" spacing={1}>
                                <Typography  variant = "body1" sx={{fontWeight: '600', color: "text.secondary,", fontSize: '18px' }} >{item.name}</Typography>
                                <Typography  variant = "body1" sx={{fontWeight: '600', color: "grey.400" }} >{item.category}</Typography>
                                </Stack>
                        </Stack>
                        </Grid>
                        <Grid item xs={4}>
                        <Stack direction="row" alignItems="center" justifyContent="end" spacing={4}>
                        <Typography  variant = "body1" sx={{fontWeight: '600', color: "text.secondary,", fontSize: '18px'}} >${item.price}</Typography>
                        </Stack>
                        </Grid>
                    </Grid>
                ))
            }
                </Stack>

                <Stack direction="column" spacing={3}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: '1px' }}>
                        <Typography  variant = "body1" sx={{fontWeight: '600', color: "text.secondary,"}} >Total</Typography>
                        <Typography  variant = "body1" sx={{fontWeight: '600', color: "text.secondary,"}} >$420</Typography>
                </Stack>
                </Stack>
                </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Checkout;
