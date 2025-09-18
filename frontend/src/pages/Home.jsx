import React from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
import banner from "../assets/new2.png"; // ✅ import your image
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div class="banner">
        <img src={banner} alt=""/>
      </div>
    </div>
  );
}

export default Home;
// className="hero-section"
//         style={{ backgroundImage: `url(${banner})` }} 