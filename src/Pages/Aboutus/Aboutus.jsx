import React,{useState} from "react";
import "../Aboutus/About.css";
import { Waypoint } from "react-waypoint";
import "animate.css"


export default function Aboutus() {


const [classname, setClassname] =useState(document.getElementsByClassName('js-wp-1'))

  return (
    <div className="container aboutus_container">
      <center>
        <h3 className="aboutus_header">
          About <span className="shared_color">Us</span>
        </h3>
      </center>
      <div className="row">
      <Waypoint
                  onEnter={() =>
                    setClassname("animate__animated animate__fadeInUp")
                  }
                  onLeave={() => setClassname("invisible")}
                  topOffset="-100%"
                  bottomOffset="30px"
                />
      <div className={`col-md-6 aboutus js-wp-1 ${classname}`}>
      <iframe height="315" src="https://www.youtube.com/embed/W2lX_huOen0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className={`col-md-6 note-zone js-wp-1 ${classname}`}>
        <blockquote>
          Lazksport is a multipurpose site, We are into alot. check below in
          footer about how we started.<br/>
          <p>Please do well to always follow us up, as we are just new web development, the management is seriously in need of your assistance
            either financial or joblically like by providing us job.
          </p>
          <br/>
          <p>Also subscribe to our youtube channel for more tutorials from us thanks and may God keep you alive</p>
        </blockquote>
      </div>
      </div>
    </div>
  );
}
