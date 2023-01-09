import React from 'react';
import "../LeagueBox/LeagueBox.scss";

export default function LeagueBox() {

    let currentDate = new Date().toJSON().slice(0, 10);

  return (
    <div className='container'>
    <div className="d-inline-flex leagueBox_header">
        <h2>Latest Editions</h2>
        <button>Browse Archive</button>
    </div>
    <div className="box_container">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <img src="https://uploads-ssl.webflow.com/5d6942eb677c2a822df4b701/63bb7871f1d829cfee49aaab_hltv20surprises_meta-p-800.png" alt="" className="card-image" />
                    <div className="card-text">
                       <span className='text-muted'>{currentDate}</span> 
                       <h5>#331: Christmas come late</h5>
                        <h6>It’s the most beautiful time of the year; HLTV top 20 time.</h6>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <img src="https://uploads-ssl.webflow.com/5d6942eb677c2a822df4b701/63b7804b476f2280bdb02045_cerqus-p-800.png" alt="" className="card-image" />
                    <div className="card-text">
                    <span className='text-muted'>{currentDate}</span> 
                       <h5>#330: The CeRq-us is in town</h5>
                        <h6>Evil Geniuses are finally rolling the dice — only two years too late.</h6>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            <div className="card">
                    <img src="https://uploads-ssl.webflow.com/5d6942eb677c2a822df4b701/63a4f241efca110f32d9228f_es3tag_smoke_meta-p-800.png" alt="" className="card-image" />
                    <div className="card-text">
                       <span className='text-muted'>{currentDate}</span> 
                       <h5>#329: The new smoke criminal</h5>
                        <h6>es3tag has left in a puff of smoke.</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
