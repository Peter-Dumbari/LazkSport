import React, { useEffect, useState } from "react";
import godest from "../images/RunningMessi.png";
import axios from "axios";
import Footer from "../Components/Footer";
import Pagination from "../Components/Pagination";
import Premier from '../images/PremierLeague.png'
import {collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-configuration";
import Spinner  from '../Components/Spinner'

export default function Livescores() {
  const [leagues, setLeagues] = useState([]);
  const livescoresCollectionRef = collection(db, "Livescores");
  const [isLoading, setIsLoading] =  useState(false)


  useEffect(()=>{
    setIsLoading(true)
    const GetLivescores =async() =>{
        const Livescore = await getDocs(livescoresCollectionRef)
        setLeagues(Livescore.docs.map((doc)=>({...doc.data(), id: doc.id})))
        setIsLoading(false)
      }
    GetLivescores();
  },[])


  return (
    <>
      <div className="container-fluid" style={{ background: "#000" }}>
        <div
          className="row"
          style={{ justifyContent: "center", color: "#fff" }}
        >
          <div className="col-7 col-md-5">
            <div
              className="row"
              style={{
                textAlign: "center",
                padding: "1%",
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              <div className="container-fluid">
                <img src={Premier} alt=""  width='100px' />
                <h4>Premier League Livescores</h4>
              </div>
              {isLoading? <Spinner/> : leagues.map((datas, id)=>
               <div
               className="row align-items-start"
               style={{
                 backgroundColor: "red",
                 marginBottom: "1rem",
                 borderRadius: "6px",
               }}
               key={id}
             >
              <div className="row" style={{marginLeft: '-10%', padding: '0', color: 'black', width: '1%'}}>{datas.startTime}</div>
               <div className="col">{datas.LiveTime}</div>
               <div
                 className="col"
                 style={{textAlign: 'left'}}
               >

                 <div className="col" style={{marginLeft: '-10%'}}>
                   <span style={{marginRight:"5%", width: '50%'}}>{datas.HomeTeam}</span>
                   <img src={datas.HomeFlag} alt="" width="30px"/> <span className="scores">{datas.HomeScore}</span>
                 </div>
                 <div className="col" style={{marginLeft: '-10%'}}>
                 <span style={{marginRight:"5%", width: '50%'}}>{datas.AwayTeam}</span> 
                 <img src={datas.AwayFlag} alt="" width="30px" /> <span className="scores">{datas.AwayScore}</span>
                 </div>
               </div>
             </div>)}
               
            </div>
          </div>
          
          <div className="col-9 col-md-7">
            <img src={godest} alt="" style={{ width: "80%" }} />
          </div>
        </div>
      </div>
      <Pagination/>
      <Footer />
    </>
  );
}
