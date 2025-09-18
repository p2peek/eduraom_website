// import React from 'react'
// import { Link } from 'react-router-dom'
// import "./Navbar.css";
// import logo from '../../assets/eduroam-logo.png'

// function Navbar() {
//   return (
//     <div class="navLinks">
//       <div className="nav-content">
//         <div class="nav-div">
//           <img src={logo} alt="" class="logo" />
//         </div>
//           <ul className='ul'>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/location">Location</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//             <li>
//               <Link to="/faq">FAQ</Link>
//             </li>
//             <li>
//               <Link to="/news">News</Link>
//             </li>
//           </ul>
//       </div>
//     </div>
//   )
// }

// export default Navbar



import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import "./Navbar.css";
import logo from '../../assets/eduroam-logo.png'

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="navLinks">
      <div className="nav-content">
        <div className="nav-div">
          <img src={logo} alt="" className="logo" />
        </div>
        <ul className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* ABOUT with dropdown + arrow */}
          <li
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="about-wrapper">
              <Link to="/about">About</Link>
              <ChevronDown
                size={16}
                strokeWidth={5} 
                className={`dropdown-icon ${isDropdownOpen ? "rotate" : ""}`}
              />
            </div> 

            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/about/what-is-eduroam">What is eduroam?</Link></li>
                <li><Link to="/about/how-it-works">How it Works</Link></li>
                <li><Link to="/about/policies">Policies</Link></li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/location">Location</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar







// import React from "react";
// import { NavLink } from "react-router-dom";
// import { ChevronDown } from "lucide-react"; // for the dropdown arrow
// import logo from "../../assets/eduroam-logo.png";


// function Navbar() {
//   return (
//     <nav class="">
//       {/* Logo */}
//       <div>
//         <img src={logo} alt="Eduroam Logo" className="h-12" />
//       </div>

//       {/* Navigation Links */}
//       <ul className="flex space-x-8 text-white font-bold text-sm tracking-wide">
//         <li>
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `transition-colors ${
//                 isActive ? "text-blue-300" : "hover:text-blue-300"
//               }`
//             }
//           >
//             HOME
//           </NavLink>
//         </li>

//         {/* About with dropdown arrow */}
//         <li className="flex items-center space-x-1 cursor-pointer">
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               `transition-colors ${
//                 isActive ? "text-blue-300" : "hover:text-blue-300"
//               }`
//             }
//           >
//             ABOUT
//           </NavLink>
//           <ChevronDown size={14} className="text-white" />
//         </li>

//         <li>
//           <NavLink
//             to="/location"
//             className={({ isActive }) =>
//               `transition-colors ${
//                 isActive ? "text-blue-300" : "hover:text-blue-300"
//               }`
//             }
//           >
//             LOCATIONS
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/news"
//             className={({ isActive }) =>
//               `transition-colors ${
//                 isActive ? "text-blue-300" : "hover:text-blue-300"
//               }`
//             }
//           >
//             NEWS
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/faq"
//             className={({ isActive }) =>
//               `transition-colors ${
//                 isActive ? "text-blue-300" : "hover:text-blue-300"
//               }`
//             }
//           >
//             FAQ
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               `transition-colors ${
//                 isActive ? "text-blue-300" : "hover:text-blue-300"
//               }`
//             }
//           >
//             CONTACT
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
