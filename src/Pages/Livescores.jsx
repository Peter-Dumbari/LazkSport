import React, { useEffect, useState } from "react";
import godest from "../images/RunningMessi.png";
import axios from "axios";
import Footer from "../Components/Footer";
import Pagination from "../Components/Pagination";
import Premier from '../images/PremierLeague.png'

export default function Livescores() {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://apisoccer.com/api/Soccer/getFixturesSeasonByLeagueID?apiKey=freeAPIKey&leagueID=42719`
      )

      .then((response) => {
        console.log(response.data.Data.rounds)
        localStorage.setItem(
          "leagues",
          JSON.stringify(response.data.Data.rounds[0].events)
        );

      })
      .catch((error) => {
        console.log(error);
      });
  });

  const items = JSON.parse(localStorage.getItem("leagues"));
  console.warn(items);
  // setLeagues(items);



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
              {items.map((datas, index)=>
               <div
               className="row align-items-start"
               style={{
                 backgroundColor: "red",
                 marginBottom: "1rem",
                 borderRadius: "6px",
               }}
               key={index}
             >
              <div className="row" style={{margin: '0', padding: '0', color: 'black'}}>{datas.startTime}</div>
               <div className="col">{datas.timeLive}</div>
               <div
                 className="col"
                 style={{textAlign: 'left'}}
               >
                 <div className="col">
                   {datas.homeTeam.name}
                   <img src="" alt="" />
                 </div>
                 <div className="col">
                   {datas.awayTeam.name} <img src="" alt="" />
                 </div>
               </div>
               <div className="col">
                 <div className="col"><h6>{datas.homeScore}</h6></div>
                 <div className="col"><h6>{datas.awayScore}</h6></div>
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
