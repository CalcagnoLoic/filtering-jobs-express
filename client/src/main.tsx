import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import JobDetails from "./pages/JobDetails";
import NewOffer from "./pages/NewOffer";

import "../public/style/style.css";

createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/job-details/:id" element={<JobDetails />} />
      <Route path="/new-offer" element={<NewOffer />} />
    </Routes>
  </Router>,
);
