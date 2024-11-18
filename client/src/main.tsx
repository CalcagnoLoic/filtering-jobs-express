import { createRoot } from "react-dom/client";
import "../public/style/style.css";
import Homepage from "./pages/Homepage";

createRoot(document.getElementById("root")!).render(<Homepage />);
