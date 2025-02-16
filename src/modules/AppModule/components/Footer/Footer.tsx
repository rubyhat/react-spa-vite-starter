import { Box, Container, Grid2, Typography } from "@mui/material";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <Box
      component="footer"
      data-testid="footer"
      sx={{ borderTop: "1px solid", borderColor: "#ccc" }}
    >
      <Container maxWidth="xl">
        <Grid2 container>
          <Grid2 size={12}>
            <Box sx={{ py: 2 }}>
              <Box>logo</Box>
              <Typography component="p" variant="body1">
                © {currentYear}. Product name
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};
