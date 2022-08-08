import React from "react";
import Manu from "../images/Ronaldo image.jpg";
import Messi from "../images/messiboko.jpg";
import Chelsea from "../images/chelsea.jpg";
import Box from "./Card";
import Footer from "../Components/Footer";
import StyleBg from "./StyleBg";
import "../App.css";
import Carousel from 'react-bootstrap/Carousel';


export default function HomePage() {
  return (
  <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Manu}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>...For research and backup</h1>
          <h4>Is openned for all type of inquiry concerning Sports.</h4>
          <button type="button" className="btn btn-outline-danger btn-lg" >GET STARTED</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Messi}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>..Entertainment and Refreshment</h1>
          <h4>free livescores and other sport updates.</h4>
          <button type="button" className="btn btn-outline-danger btn-lg">GET STARTED</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Chelsea}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>...LazkSport for all, both young and aged</h1>
          <h4>
           Internet freedom is our goal.
          </h4>
          <button type="button" className="btn btn-outline-danger btn-lg">GET STARTED</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Box/>
    <Footer/>
    </>
  );
}
