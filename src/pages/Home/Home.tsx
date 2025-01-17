import { Box } from "@mui/material";
import TestSvg from "../../../public/test.svg";

export const Home = () => {
  return (
    <Box component="section" data-testid="pageHome">
      Home page
      <Box component="img" src={TestSvg} />
    </Box>
  );
};
