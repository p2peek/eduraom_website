// import React from "react";
// import Navbar from "../Components/Navbar/Navbar.jsx";
// import banner from "../assets/bn7.png"; // ✅ import your image
// import "./Home.css";

// function Home() {
//   return (
//     <div>
//       <Navbar />
//       <div class="banner">
//         <img src={banner} alt=""/>
//       </div>
//     </div>
//   );
// }

// export default Home;



import React from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
import banner from "../assets/bn7.png";
import "./Home.css";
import Footer from "../Components/Navbar/Footer/Footer.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <img src={banner} alt="Banner" />
        <div className="banner-text">
          <h2>Connecting India's Academic Community</h2>
          <p>
            Secure, seamless wireless network access across educational institutions nationwide. Part of India's Digital Education initiative under Government of India. It ensures reliable connectivity for academic and research activities anytime, anywhere.
          </p>
          <br />
          <div className="banner-btn">
            <button className="learn-btn">Configure Device</button>
            <button className="learn-btn">Find Participating Institutions</button>
          </div>

        </div>
        {/* <div className="banner-txt">
          
        </div> */}
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
