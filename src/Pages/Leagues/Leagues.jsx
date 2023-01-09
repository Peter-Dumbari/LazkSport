import React from "react";
import { useEffect, useState } from "react";
import "../Leagues/Leagues.scss";
import LeaguesCard from "./LeaguesCard/LeaguesCard";
import axios from "axios";
import { PaginatedItems } from "../../Components/ReactPaginate/ReactPaginate";

export default function Livescore() {
  const [loading, setLoading] = useState(false);
  const [league, setLeague] = useState([
    // {index: 0,
    // name: "Premier League"
    // },
    // {
    //   index: 1,
    //   name: "Champion League"
    // },
    // {
    //   index: 3,
    //   name: "Laliga League"
    // },
    // {index: 0,
    // name: "FA cup"
    // },
    // {
    //   index: 1,
    //   name: "Nations Cup"
    // },
    // {
    //   index: 3,
    //   name: "FIFA world Cup"
    // },
    // {index: 0,
    // name: "Game of throne"
    // },
    // {
    //   index: 1,
    //   name: "Europa League"
    // },
    // {
    //   index: 3,
    //   name: "Dream League"
    // },
    // {index: 0,
    // name: "Peter's League"
    // },
    // {
    //   index: 1,
    //   name: "RIvers State Cup"
    // },
    // {
    //   index: 3,
    //   name: "Cup of Nation"
    // }
    // ,
    // {index: 0,
    // name: "African cup of Nation"
    // },
    // {
    //   index: 1,
    //   name: "Cup of Cup"
    // },
    // {
    //   index: 3,
    //   name: "Drinking cup"
    // }
  ]);
  const itemsPerPage = 12;
  const Pi = "647bdb30-0cd6-11ed-8943-fb6bf593a257";

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      axios
        .get(`https://app.sportdataapi.com/api/v1/soccer/leagues? apikey=${Pi}`)
        .then((response) => {
          setLeague(response.data.data);
          console.log(league);
          setLoading(false);
        })
        .catch((error) => {
          console.warn(error);
          setLoading(false);
          alert(error.message);
        });
    };
    getData();
  }, []);

  return (
    <div className="Livescore_body_container">
      <div className="livescore_container row">
        <div className="livescore_image col-sm-4">
          <img
            src="https://res.cloudinary.com/tamstech-computer-repair-center/image/upload/v1671297822/Lazksport/phoneimage_d8n7xt.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="livescore_header_text col-sm-5">
          <h1>Football brings unity and Peace</h1>
          <h5 className="st_paragraph">
            Get two emails a week with the biggest esports stories and matches
            from <bolder>CS:GO.</bolder>
          </h5>
          <h5 className="nd_paragraph">
            Read less, know more. <i>It’s free, forever!</i>
          </h5>

          <div className="subscription_input_box_container">
            <div className="subscription_box d-line">
              <form action="">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email"
                  required
                />
                <button>
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <PaginatedItems
        itemsPerPage={itemsPerPage}
        items={league}
        loading={loading}
      />
    </div>
  );
}
