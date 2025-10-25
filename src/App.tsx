import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage";
import MissionPage from "./components/MissionBlock/MissionPage";
import FalconPage from "./components/FalconBlock/FalconPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/falcon" element={<FalconPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
