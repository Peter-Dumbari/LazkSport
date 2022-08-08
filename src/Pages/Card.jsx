import React,{useState, useEffect} from "react";
import Manu from "../images/manunited.png";
import Cricket from "../images/Cricket.jpg";
import BaseBall from "../images/Peoples.png";
import "../App.css";
import davido from "../images/DAvido.gif";
import { db } from "../firebase-configuration";
import { collection, addDoc } from "firebase/firestore";


export default function Box() {

  const [ok, setOk] = useState(false)
  const [hard, setHard] = useState(false)
  const usersCollectionRef = collection(db, "Comments")

  

  const datas ={
    ok: ok,
    hard: hard
  }

  const HandleSubmit =async(e) =>{
    e.preventDefault()
    console.log(hard)
    console.log(ok)

    if (ok === true){
      window.alert('Thanks for your response')
    }

    if (hard === true){
      window.alert("Thanks for your response, we are working on it")
    }

    
    await addDoc(usersCollectionRef, {Ok: ok, Hard: hard})
    .then(response =>{
      console.log(response)
    })
    .catch(err =>{
      console.log(err)
    })
  }
 
  return (
    <>
      <hr />
      <a href="https://1xbet-1x.com">
        <img src={davido} alt="" width="50%" />
      </a>

      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                Place your Advert Here!!
              </h5>
              <p className="card-text" style={{ color: "black" }}>
                Place your advert with geniune concept, and at a very cheaper
                rate.
              </p>
              <a href="#" className="btn btn-primary">
                Place Advert
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                Songs and Videos Promotion
              </h5>
              <p className="card-text" style={{ color: "black" }}>
                Promote your Movies, Music and Music Videos here, Very cheap and
                with nice concept.
              </p>
              <a href="#" className="btn btn-primary">
                Promote
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-80 shadow-lg p-3 mb-5 bg-secondary rounded">
            <img src={Manu} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Football Updates</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-80 shadow-lg p-3 mb-5 bg-secondary rounded">
            <img src={BaseBall} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">BaseBall Updates</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-80 shadow-lg p-3 mb-5 bg-secondary rounded">
            <img src={Cricket} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cricket Updates</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body" style={{ color: "black" }}>
          <h5>How can you rate this page?</h5>
          <form>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value={hard}
              onChange={(e) => setHard(e.currentTarget.checked)}
            />
            <label class="form-check-label" for="inlineRadio1">
              Bad 
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value={ok}
              onChange={(e) => setOk(e.currentTarget.checked)}
              required
            />
            <label class="form-check-label" for="inlineRadio2">
              Good 
            </label>
          </div>
          <button className="btn btn-outline-primary" onClick={HandleSubmit}>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
