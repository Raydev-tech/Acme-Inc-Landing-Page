import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import HomePage from "./Pages/HomePage";

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage />} />
       </Routes>
      </BrowserRouter>
       <Footer />
    </>
  )
}

export default App
