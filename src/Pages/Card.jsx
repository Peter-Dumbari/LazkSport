import React from 'react'
import Manu from '../images/manunited.png'
import Cricket from '../images/Cricket.jpg'
import BaseBall from '../images/Peoples.png'
import "../App.css"


export default function Box() {
  return (
    <>

  <div className="row row-cols-1 row-cols-md-3 g-4" >
  <div className="col">
    <div className="card h-80 shadow-lg p-3 mb-5 bg-secondary rounded" >
      <img src={Manu} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Football Updates</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-80 shadow-lg p-3 mb-5 bg-secondary rounded" >
      <img src={BaseBall} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">BaseBall Updates</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-80 shadow-lg p-3 mb-5 bg-secondary rounded" >
      <img src={Cricket} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Cricket Updates</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
