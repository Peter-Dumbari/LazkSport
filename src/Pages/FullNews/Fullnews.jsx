import React, { useEffect, useState } from "react";
import "../FullNews/Fullnews.css";
import OpeningNav from "../../Components/OpeningNav/OpeningNav";
import Footer from "../../Components/Footer";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-configuration";
import { useParams } from "react-router-dom";

export default function Fullnews() {
  const [fullnews, setFullnews] = useState([]);
  const params = useParams();

  async function getData() {
    try {
      const newsTemp = await getDoc(doc(db, "News", params.newsid));
      console.log(newsTemp.data());
      setFullnews(newsTemp.data());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <body>
      <OpeningNav />
      {fullnews && (
        <div className="container">
        <div className="col-md-10 full-container P-3">
        <h1>BREAKING: {fullnews.news_title}</h1>
        <div className="d-flex share-container col-md-6">
          <span>Kindly share via: </span>
          <div className="d-flex icon-container">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>

        <div className="card full-news-card">
          <img
            src={fullnews.image_news}
            alt=""
          />
          <div className="d-flex card-bottom-items">
            <span className="news_writter">By {fullnews.news_compiler}</span>

            <span className="text-muted news-date">
              {fullnews.news_date}
            </span>
          </div>

          <div className="card-body full-card-body">
            {fullnews.news_body}
          </div>
        </div>
      </div>
        <div className="col-md-2"></div>
      </div>
      )}
      <Footer />
    </body>
  );
}
