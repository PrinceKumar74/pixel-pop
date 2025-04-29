import React from "react"
import Home from "./components/Home"
import Layout from "./components/layout/Layout"
import About from "./Pages/About";
import TechMeetsArt from "./components/homeComponents/animation"; 
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Loader from "./components/homeComponents/Loader";

const App=()=> {
  

  return (
  <>
  <Loader>
  <Router>
    <Routes>
      <Route element ={<Layout/>}>
        <Route path ="/" element={<Home/>}/>
        <Route path="/About" element ={<About/>}/>
        <Route path="/Animation" element={<TechMeetsArt/>}/>
</Route>
</Routes>
</Router>
</Loader>
  </>
  )
}

export default App
