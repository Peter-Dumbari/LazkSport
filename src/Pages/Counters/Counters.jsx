import React, { useState } from "react";
import { useEffect } from "react";
import "../Counters/Counters.css";
import $ from "jquery";
import "animate.css";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.min.css";
import { Waypoint } from "react-waypoint";

export default function Counters() {
  
  let [marketer, setMarketer]= useState(0)
  let [visitors, setVisitors]= useState(0)
  let [tutors, setTutors]= useState(0)
  let [investors, setInvestors]= useState(0)

  useEffect(()=>{
    if (marketer < 200){
        const interval = setInterval(() =>{
          setMarketer(marketer => marketer +1)
        }, 1)
        return () => clearInterval(interval)
    }

    if (visitors < 300){
      const numberOfVisitors = setInterval(()=>{
        setVisitors(pre => pre +1)
      })
      return()=> clearInterval(numberOfVisitors)
    }
    
    if ( tutors < 350){
      const numberOfTutors = setInterval(()=>{
        setTutors(tutors => tutors +1)
      })
      return()=> clearInterval(numberOfTutors)
    }
    
    if ( investors < 250){
      const numberOfInvestors = setInterval(()=>{
        setInvestors(investors => investors +1)
      })
      return()=> clearInterval(numberOfInvestors)
    }
    
  }, [marketer, visitors, tutors, investors])

  const [classname, setClassname] =useState(document.getElementsByClassName('counter'))
  
  return (
    <div className="container counters_container">
      <div className="row all_counters">
        <div className="col-md-3">
          <Waypoint
            onEnter={()=>setClassname('animate__animated animate__backInRight')}
            onLeave={()=>setClassname('invisible')}
            topOffset={"20px"}
            bottomOffset={"-6px"}
          />
          <div className={`counter ${classname}`}>
                <span>Marketer</span>
                <h6>{marketer}</h6>
              </div>
        </div>
        <div className="col-md-3">
          <div className={`counter ${classname}`}>
            <span>Visitors</span>
            <h6>{visitors}</h6>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`counter ${classname}`}>
            <span>Tutors</span>
            <h6>{tutors}</h6>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`counter ${classname}`}>
            <span>Investors</span>
            <h6>{investors}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
