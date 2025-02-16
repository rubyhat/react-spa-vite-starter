import { Container, Grid2 } from "@mui/material";
import { LoginForm } from "./components/LoginForm";

export const LoginModule = () => {
  return (
    <Container>
      <Grid2 container justifyContent="center" alignItems="center">
        <Grid2 size={{ xs: 12, md: 6 }} py={10}>
          <LoginForm />
        </Grid2>
      </Grid2>
    </Container>
  );
};
