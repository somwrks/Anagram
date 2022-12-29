import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Offline, Online } from "react-detect-offline";
import Error from "./Error";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";


function App() {
  
  return (
    <>
      <Online>
      <div className="mx-auto">

        <BrowserRouter>
            <Navbar />
          <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      </Online>
      <Offline>
        <Error />
      </Offline>
    </>
  );
}

export default App;
