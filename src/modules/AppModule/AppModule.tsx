import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";

import { customTheme } from "../../themes/customTheme";
import { RouteList } from "../../routelist";
import { ToasterProvider } from "../../providers";

const client = new QueryClient();

export const AppModule = () => {
  return (
    <Router>
      <QueryClientProvider client={client}>
        <ThemeProvider theme={customTheme}>
          <div className="wrapper">
            <main className="content">
              <React.Suspense>
                <RouteList />
              </React.Suspense>
            </main>
          </div>
          <ToasterProvider />
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
};
