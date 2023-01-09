import React from "react";
import "../LeaguesCard/LeaguesCard.scss";
import Loader from "../../../Components/OpeningLoader/Loader";

export default function LeaguesCard({currentItems, loading}) {
  return (
    <div className="container">
      <h1 className="text-center">Popular Leagues Played Across the Globe</h1>
      <div className="row-container">
        { loading? <Loader/> : currentItems && currentItems.map((items,index)=>
         <div className="column" key={index}>
         <div className="card cardie">
           <div className="card-header">
             <div className="d-inline-flex">
               <h6>{items.name}</h6>
               <i class="fa fa-futbol"></i>
             </div>
           </div>

           <div className="card-body" >
           <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ullam fugit voluptatem corrupti eveniet quisquam, omnis culpa eaque magni nemo?</p>
           </div>
         </div>
       </div>
        )}
      </div>
    </div>
  );
}
