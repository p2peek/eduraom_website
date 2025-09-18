import './App.css'
import React from 'react'
import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/700.css"; // For bold headings
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Location from './pages/Location.jsx'
import About from './pages/About.jsx'
import News from './pages/News.jsx'
import Faq from './pages/Faq.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/news" element={<News/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App






















// import './App.css'
// import React from 'react'

// // import {createBrowserRouter, RouterProvider} from "react-router-dom"
// import { createBrowserRouter, RouterProvider } from "react-router-dom";


// import Home from './pages/Home.jsx'
// import Contact from './pages/Contact.jsx'
// import Location from './pages/Location.jsx'
// import About from './pages/About.jsx'
// import Faq from './pages/Faq.jsx';
// import News from './pages/News.jsx';

// const router = createBrowserRouter(
//   [
//     {  
//       path: "/",
//       element : <Home/>
//     },
//     {
//       path: "/about",
//       element : <About/>
//     },
//     {
//       path: "/location",
//       element : <Location/>
//     },
//     {
//       path: "/contact",
//       element : <Contact/>
//     },
//     {
//       path: "/faq",
//       element : <Faq/>
//     },
//     {
//       path: "/news",
//       element : <News/>
//     },
//   ]
// )

// function App() {

//   return (
//     <>
//       <RouterProvider router={router}/>
//     </>
//   )
// }

// export default App
