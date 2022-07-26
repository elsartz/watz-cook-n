import { Routes, Route } from "react-router-dom";
import Home from './Home'
// import Popular from "./Popular/Popular";
export default function Pages() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  </>
  );
}
