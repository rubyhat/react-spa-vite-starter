import React from "react";
import { Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RouteList } from "../../routelist";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ToasterProvider } from "../../providers";
import { customTheme } from "../../themes/customTheme";

const client = new QueryClient();

export const AppModule = () => {
  return (
    <Router>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={customTheme}>
          <Box component="div" className="wrapper">
            <Header />
            <Box component="main" className="content">
              <React.Suspense>
                <RouteList />
              </React.Suspense>
            </Box>
            <Footer />
          </Box>
          <ToasterProvider />
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
};
