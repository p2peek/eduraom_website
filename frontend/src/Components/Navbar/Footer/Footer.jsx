// import React from "react";
// import logo1 from "../../../assets/ernet.png"; // ✅ Replace with your first logo path
// import logo2 from "../../../assets/meity.svg"; // ✅ Replace with your second logo path
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="bg-[#004869] text-white py-6 w-full h-[300px]">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
//         {/* Left Section - Links */}
//         <div className="footer-link">
//           <div className="text-center md:text-left mb-4 md:mb-0">
//             <h3 className="text-lg font-semibold mb-2">More Information</h3>
//             <ul className="space-y-1">
//               <li>
//                 <a href="/" className="hover:underline">
//                   HOME
//                 </a>
//               </li>
//               <li>
//                 <a href="/privacy-policy" className="hover:underline">
//                   PRIVACY POLICY
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="hover:underline">
//                   CONTACT US
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>


//         {/* Right Section - Logos */}
//         <div className="footer-logo">
//           <div className="flex flex-col md:flex-row items-center gap-4">
//             {/* <span className="text-sm uppercase tracking-wide">Powered By</span> */}
//             <div className=" items-center pb[50px] ">
//               <img
//                 src={logo1}
//                 alt="Logo 1"
//                 className="h-30 object-contain"
//               />
//               <br />
//               <br />
//               <img
//                 src={logo2}
//                 alt="Logo 2"
//                 className="h-30 object-contain"
//               />
//             </div>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from "react";
// import logo1 from "../../../assets/ernet.png"; // ✅ Replace with your first logo path
// import logo2 from "../../../assets/meity.svg"; // ✅ Replace with your second logo path

// const Footer = () => {
//   return (
//     <footer className="w-full">
//       {/* Main Footer Section */}
//       <div className="bg-[#004869] text-white py-10">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

//           {/* Left Section - Links */}
//           <div className="text-center md:text-left mb-6 md:mb-0">
//             <h3 className="text-lg font-semibold mb-3">More Information</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="/" className="hover:underline">
//                   HOME
//                 </a>
//               </li>
//               <li>
//                 <a href="/privacy-policy" className="hover:underline">
//                   PRIVACY POLICY
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="hover:underline">
//                   CONTACT US
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Right Section - Logos */}
//           <div className="flex flex-col md:flex-row items-center gap-6">
//             <div className="flex flex-col items-center">
//               <img src={logo1} alt="Logo 1" className="h-16 object-contain" />
//               <div className="my-2"></div>
//               <img src={logo2} alt="Logo 2" className="h-16 object-contain" />
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Bottom Strip */}
//       <div className="bg-[#003851] text-white text-center py-3 text-sm">
//         © AARNet Pty. Ltd. 2025
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from "react";
// import logo1 from "../../../assets/ernet.png";
// import logo2 from "../../../assets/meity.svg";

// const Footer = () => {
//   return (
//     <footer className="w-full">
//       {/* Main Footer Section */}
//       <div className="bg-[#004869] text-white py-10 h-[25vh]">
//         <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center">

//           {/* Left Section - Links */}
//           <div className="text-center md:text-left mb-6 md:mb-0 md:ml-10 ">
//             <h3 className="text-lg font-semibold mb-3">More Information</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="/" className="hover:underline">
//                   HOME
//                 </a>
//               </li>
//               <li>
//                 <a href="/privacy-policy" className="hover:underline">
//                   PRIVACY POLICY
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="hover:underline">
//                   CONTACT US
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Right Section - Logos */}
//           <div className="flex flex-col md:flex-row items-center gap-6 md:mr-10">
//             <div className="flex flex-col items-center">
//               <img src={logo1} alt="Logo 1" className="h-30 object-contain" />
//               <div className="my-2"></div>
//               <br />
//               <br /><br />
//               <img src={logo2} alt="Logo 2" className="h-30 object-contain" />
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Bottom Strip */}
//       <div className="bg-[#003851] text-white text-center py-3 text-sm">
//         © AARNet Pty. Ltd. 2025
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react'
import "./Footer.css";
import logo1 from "../../../assets/ernet.png";
import logo2 from "../../../assets/meity.svg";


function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="left-footer">
          <div className="links1">
            <div className="text-center md:text-left mb-6 md:mb-0 md:ml-10 ">
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:underline">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:underline">
                    PRIVACY POLICY
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="links2">
            <div className="text-center md:text-left mb-6 md:mb-0 md:ml-10 ">
              <h3 className="text-lg font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:underline">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:underline">
                    PRIVACY POLICY
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="links3">
            <div className="text-center md:text-left mb-6 md:mb-0 md:ml-10 ">
              <h3 className="text-lg font-semibold mb-3">Legal & Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:underline">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:underline">
                    PRIVACY POLICY
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className="right-footer">
          <img src={logo1} alt="Logo 1" className="h-30 object-contain footer-logo1" />
          <img src={logo2} alt="Logo 2" className="h-30 object-contain" />
        </div>

      </div>
      <div className="bg-[#003851] text-white text-center py-3 text-sm">
        © 2025 eduroam India. All rights reserved.
      </div>
    </div>

  )
}

export default Footer
