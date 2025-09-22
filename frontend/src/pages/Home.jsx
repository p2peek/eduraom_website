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
import { ArrowRight } from "lucide-react";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <div className="home-section0">
          {/* <div className="banner-text">
            <h2>Connecting India's Academic Community</h2>
            <p>
              Secure, seamless wireless network access across educational institutions nationwide. Part of India's Digital Education initiative under Government of India. It ensures reliable connectivity for academic and research activities anytime, anywhere.
            </p>
            <br />
            <div className="banner-btn">
              <button className="learn-btn">Configure Device</button>
              <button className="learn-btn">Find Participating Institutions</button>
            </div>

          </div> */}
          <div className="banner-txtbox">
            <h1>Connecting India's Academic Community</h1>
            <p>
              Secure, seamless wireless network access across educational institutions nationwide. Part of India's Digital Education initiative under Government of India. It ensures reliable connectivity for academic and research activities anytime, anywhere.
            </p>
            <br />
            <div className="banner-btn">
              <button className="learn-btn">Configure Device</button>
              <button className="learn-btn">Find Participating Institutions</button>
            </div>
          </div>
        </div>



        <div className="home-section1">
          <div className="secDiv1">
            <h1>What is eduroam ?</h1>
            <div className="home-video">
              <div className="home-video w-full flex justify-center my-6">
                <iframe
                  className="w-full max-w-3xl aspect-video shadow-lg"
                  src="https://www.youtube.com/embed/tVhuaJMLjK4"
                  title="Eduroam Video Australian version 2019"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="exp">
                <h2>How does eduroam work?</h2>
                <p>Eduroam is available at more than 25,000 locations worldwide. In India, hundreds of universities, research institutes, hospitals, schools and cultural organisations participate in eduroam, with national coordination provided by ERNET India to support seamless roaming access across the country.<br /> <br />Eduroam allows users from participating institutions to gain secure wireless network access at other participating institutions across India and around the globe using the standard username and password credentials they use at their home institution for wireless network access.</p>
              </div>
            </div>
          </div>
          <div className="secDiv2">
            <div className="secDiv-list">
              <div className="secDiv-listDiv1">
                <h2>Find Out More</h2>
                <ArrowRight className="w-10 h-10 tmp text-gray hover:text-[#004869] cursor-pointer" strokeWidth={2.5} />
              </div>
              <hr class="divider" />
              <div className="secDiv-listDiv2">
                <h2>Device Configuration</h2>
                <p>Download automated configuration profiles for your device. Supports Windows, macOS, Linux, Android and iOS </p>
                <button className="learn-btn ltmp">CONNECT NOW</button>
              </div>
              <div className="secDiv-listDiv3">
                <h2>Institution Directory</h2>
                <p>Find participating educational institutions across India. Search by state, city or institution type.</p>
                <button className="learn-btn ltmp">CONNECT NOW</button>
              </div>
              <div className="secDiv-listDiv4">
                <h2>Join eduroam India</h2>
                <p>Information for Institutions looking to become part of the eduroam India network</p>
                <button className="learn-btn ltmp">
                  CONNECT NOW
                </button>
              </div>

            </div>
          </div>

        </div>


        <div className="home-section2">
          <div className="home-section2-txt">
            <h1>Growing Network Across India</h1>
            <p>Our network continues to expand, connecting more institutions and users <br />every month</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Home;
