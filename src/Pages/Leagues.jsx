import React,  { useState, useEffect} from "react";
import Footer from "../Components/Footer";
import axios from 'axios';
import Spinner from "../Components/Spinner";
import Toast from "../Components/Toast";

export default function Leagues() {
  const [league, setLeague] = useState([])
  const [isLoading, setIsLoading] = useState(true)
    // const token = 

    // const item ={
    //   'apikey': token
    // }
    // const _key = JSON.stringify(item)
    // const __key = JSON.parse(_key)
    // console.log(__key)
  //  const ___key = JSON.parse((__key.apikey))
  //  console.log(__key)
  // const AuthStr = '647bdb30-0cd6-11ed-8943-fb6bf593a257'; 


 
    useEffect(() =>{
     axios.get(`https://app.sportdataapi.com/api/v1/soccer/leagues? apikey=${'647bdb30-0cd6-11ed-8943-fb6bf593a257'} `
     )
     .then(response =>{
      setLeague(response.data.data)
      console.log(league)
      console.warn(response)
      setIsLoading(false)
     })
     .catch(error =>{
      console.warn(error)
      setIsLoading(false)
      if(error.message === 'Network Error'){
        <Toast/>
      }
     })
      },[])
      
  return (
    <>
      {
        isLoading? <Spinner/> : <div
        className="row row-cols-1 row-cols-md-4 g-4"
        style={{ marginTop: "2rem" }}
      >
        {league.map((leagues, index)=>
        <div class="col" key={index}>
        <div class="card bg-dark" style={{ maxWidth: "18rem" }}>
          <div className="card-header" style={{color: '#fff'}}>League {index}</div>
          <div className="card-body text-primary">
            <h5 className="card-title">{leagues.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
        )}
        
      </div>
      }
      <Footer />
    </>
  );
}
