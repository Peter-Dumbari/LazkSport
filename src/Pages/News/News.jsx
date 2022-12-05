import React, { useState, useEffect } from "react";
import "../News/News.css";
import { Waypoint } from "react-waypoint";
import 'animate.css';
import {collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-configuration";
import { Link } from "react-router-dom";



export default function News() {
  const currentNews = collection(db, "News");
  const [latestNews, setLastNews]=useState([]);

  useEffect(()=>{
    // setIsLoading(true)
    const allNews =async() =>{
        const News = await getDocs(currentNews)
        setLastNews(News.docs.map((doc)=>({...doc.data(), id: doc.id})))
        // setIsLoading(false)
      }
    allNews();
  },[])


  const [classname, setClassname]= useState(document.getElementsByClassName('js-wp-1'))
  return (
    <div className="container news_container">
      <center>
        <h2 className="news_header"><span className="shared_color">News</span> Updates</h2>
      </center>
      <div className="row">
      <Waypoint
            onEnter={()=>setClassname('animate__animated animate__fadeInUp')}
            onLeave={()=>setClassname('invisible')}
            topOffset='-100%'            
            bottomOffset='30px'
                      />
          {latestNews.map((news)=>
          <div className={`col-lg-4 js-wp-1 ${classname}`} key={news.id}>
          <div className={`card card_container `}>
            <div class="card-body">
              <h4 class="card-title news_card_title mb-4">{news.news_title}</h4>
              
              <p class="card-text new_card_text">
               {/* {news.} */}
              </p>
              <Link to={`/fullnews/${news.id}`} style={{textDecoration: "none"}}>
              <button className="btn btn-outline-secondary card-link card_button">Full News</button>
              </Link>
            </div>
            <span className="card-barge">New</span>
          </div>
        </div>
          )}
      </div>
    </div>
  );
}
