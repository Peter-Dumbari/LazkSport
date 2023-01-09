import React, { useState, useEffect } from "react";
import "../App.css";
import { db } from "../firebase-configuration";
import { collection, addDoc } from "firebase/firestore";
import "./Card.css";
import Switch from "react-switch";

export default function Box() {
  const [ok, setOk] = useState(false);
  const [hard, setHard] = useState(false);
  const usersCollectionRef = collection(db, "Comments");
  const [checked, setChecked] = useState(false);

  const datas = {
    ok: ok,
    hard: hard,
  };


  const handChecked =()=>{
    setChecked(!checked)
    if(checked == true){
      alert("you did an anual supbsription")
    }else if(checked == false){
      alert("you did a monthly supbscription")
    }
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(hard);
    console.log(ok);

    if (ok === true) {
      window.alert("Thanks for your response");
    }

    if (hard === true) {
      window.alert("Thanks for your response, we are working on it");
    }

    await addDoc(usersCollectionRef, { Ok: ok, Hard: hard })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <hr />
      <a href="https://1xbet-1x.com">
        <img src={davido} alt="" width="50%" />
      </a> */}

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card first_card">
              <div className="card_topper">
                <h5 className="company_name">LazkSports Pro</h5>
                <h6>Watch all live Lazksport games</h6>
              </div>
              <div className="card_white_body">
                <span className="dollar_sign">$</span>
                <span>44.99</span>
                <h6>PER YEAR</h6>
                <hr />
                <div className="second_part_white_body">
                  <span className="hearder">Watch Live</span>
                  <ol>
                    <li>Live stream every track session for all GPs</li>
                    <li>Live stream every track session for all GPs</li>
                    <li>Live stream every track session for all GPs</li>
                  </ol>
                  <span className="hearder">Watch Lazksport on demand*</span>
                  <ul>
                    <li>Live stream every track session for all GPs</li>
                    <li>Live stream every track session for all GPs</li>
                    <li>Live stream every track session for all GPs</li>
                  </ul>

                  <div className="card_button_container">
                    <select name="select" id="">
                      <option value="1">
                        Full access to all live timing features
                      </option>
                      <option value="1">
                        Full access to all Lazksport Updates
                      </option>
                    </select>
                    <div className="live_timing_batch">
                      Live Timing <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>

                  <button className="btn btn-danger">
                    Subscribe <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card second_card">
              <div className="second_card_topper">
                <h5 className="second_company_name">LazkSports TV access</h5>
                <h6>Watch all games and replay</h6>
              </div>
              <div className="second_card_white_body">
                <span className="dollar_sign">$</span>
                <span>26.99</span>
                <h6>PER YEAR</h6>
                <hr />
                <div className="second_second_part_white_body">
                  <span className="hearder">Watch Lazksport on demand*</span>
                  <ol>
                    <li>Live stream every track session for all GPs</li>
                    <li>Live stream every track session for all GPs</li>
                    <li>Live stream every track session for all GPs</li>
                  </ol>

                  <div className="card_button_container">
                    <select name="select" id="">
                      <option value="1">
                        Full access to all live timing features
                      </option>
                      <option value="1">
                        Full access to all Lazksport Updates
                      </option>
                    </select>
                    <div className="live_timing_batch">
                      Live Timing <i class="fa-solid fa-plus"></i>
                    </div>
                  </div>

                  <button className="btn btn-outline-danger">
                    Subscribe <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card_background"></div>
        <div className="d-flex subscription_type_toggler">
          <span className="text-muted">Annual</span>
          <Switch
            onChange={handChecked}
            checked={checked}
            uncheckedIcon={false}
            className="switch"
            checkedIcon={false}
            offColor="#6c757d"
            onColor="#f05454"
            activeBoxShadow="#f05454"
          />
          <span className="text-muted">Monthly</span>
        </div>

        <div className="bottom_note_container text-muted">
          <span>
            Replay your already saved games.{" "}
            <span className="color-red">any link inside here</span>
            <br />
            Available on Lazksport site as part your subscription <br />
            Plan subscrition must be associated with your resident country, you
            are in, at the time of subscription
          </span>
        </div>
      </div>
    </>
  );
}
