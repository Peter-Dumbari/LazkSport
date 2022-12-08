import React from "react";
import Manu from "../images/Ronaldo image.jpg";
import Messi from "../images/messiboko.jpg";
import Chelsea from "../images/chelsea.jpg";
import Box from "./Card";
import Footer from "../Components/Footer";
import "../App.css";
import "./Home.css";
import Herosection from "./Herosection/Herosection";
import {useState, useEffect } from "react";


export default function HomePage() {

  const [isLoading, setIsLoading]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    }, 9000)
  })
  return (
    <>
    {isLoading? <h6>Please wait...</h6>: 
    <>
      <div className="Home_container">
      <div className="homepage_image_container">
        <img src={Chelsea} alt="" className="homepage_image" />
      </div>
      <div className="homepage_image_display_text">
        <h1>Watch Lazksport Live & on Demand</h1>
        <span>Every F1 race and on demand. With exclusive access to on-board cameras, team radio and live timing. Take control with f1 tv</span>
        <br />

        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <select name="your location" id="">
          <option value="london">London</option>
          <option value="=america">America</option>
        </select>
      </div>
      <div className="container box_contaier">
        <div className="choose_plan_container">
        <hr/><span className="choose_plan">Choose your Plan </span><hr/>
        </div>
        <Box />
      </div>
    </div>
    <div className="empty_div">
    </div>
    <div className="herosection ">
        <Herosection/>
    </div>
    <div className="footer_div">
    <Footer />
    </div>
    </>
    }
    </>
  );
}
