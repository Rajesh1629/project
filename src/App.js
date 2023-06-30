import React from "react";
import Slider from "./slider";
import './App.css'
import Topnews from "./topnews";
export default function App() {
 
  return (
    <div className="row"> 
      <div className="container slider">
        <Topnews/>
        <Slider/>
      </div>
    </div>
     );
}