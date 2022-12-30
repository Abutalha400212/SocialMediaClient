import { Box, Container, Link, Paper, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Paper sx={{marginTop: 'calc(10% + 60px)', bottom: 0}} component="footer" square variant="outlined">
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my:1
            }}
          >
            <Link href="/">
             <img src="https://i.ibb.co/C9HNB4W/logo.png" alt="" width={70} />
            </Link>
          </Box>
  
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}
          >
            <Typography variant="caption" color="initial">
              Copyright ©2022. Newcleus Media Limited
            </Typography>
          </Box>
        </Container>
      </Paper>
  
    );
};

export default Footer;