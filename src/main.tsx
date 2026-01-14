import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/maven-pro/400.css";
import "@fontsource/maven-pro/500.css";
import "@fontsource/maven-pro/600.css";
import "@fontsource/maven-pro/700.css";
import "@fontsource/maven-pro/800.css";

createRoot(document.getElementById("root")!).render(<App />);
