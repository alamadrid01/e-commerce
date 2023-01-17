import React from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'


const homepage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "primary.light",
          padding: 1,
          borderRadius: 3,
          color: "white",
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Album layout
        </Typography>
        <Typography
          variant="h4"
          align="center"
          color="text.secondary"
          paragraph
        >
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained">Main call to action</Button>
          <Button variant="outlined">Secondary action</Button>
        </Stack>
      </Container>
      <Container maxWidth="lg" sx={{ backgroundColor: "grey.100" }}>
        <Typography
          align="center"
          variant="h2"
          color="text.secondary"
          sx={{ fontWeight: "600" }}
        >
          Our Collections
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Item sx={{ border: 2, borderColor: "common.white", backgroundColor: "grey.100" }}>Decorations</Item>
          </Grid>
         
          <Grid item xs={3}>
            <Item sx={{ border: 2, borderColor: "common.white", backgroundColor: "grey.100" }}>Lights</Item>
          </Grid>
         
          <Grid item xs={6}>
            <Item sx={{ border: 2, borderColor: "common.white", backgroundColor: "grey.100" }}>Outdoor Design</Item>
          </Grid>

          <Grid item xs={6}>
            <Item sx={{ border: 2, borderColor: "common.white", backgroundColor: "grey.100" }}>Outdoor Design</Item>
          </Grid>

          <Grid item xs={3}>
            <Item sx={{ border: 2, borderColor: "common.white", backgroundColor: "grey.100" }}>Decorations</Item>
          </Grid>
         
          <Grid item xs={3}>
            <Item sx={{ border: 2, borderColor: "common.white", backgroundColor: "grey.100" }}>Lights</Item>
          </Grid>
         
         
        </Grid>
      </Container>
    </div>
  );
};

export default homepage;
