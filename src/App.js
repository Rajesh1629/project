import React from "react";
import Slider from "./components/slider";
import Topnews from "./components/topnews";
import './App.css'
import Layout from "./components/layout";
import Header from "./components/header";
export default function App() {
 
  return (
       <Layout>
          <Topnews/>  
          <Slider/>
       </Layout>
     );
}