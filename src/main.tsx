import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppModule } from "./modules/AppModule";
import "./assets/global.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppModule />
  </StrictMode>,
);
