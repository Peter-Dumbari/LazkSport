import React from "react";
import "./Herosection.css";

export default function Herosection() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 image_section">
          <img
            src="https://www.formula1.com/content/dam/fom-website/subscribe-to-f1/stf1-banner-1.png"
            alt=""
          />
        </div>
        <div className="col-md-6 description_section">
          <h2>Stream lazksport live on the goal</h2>

          <blockqoute>
            Watch all the lazksports sessions (free practies, qualifying and the
            race) live or on demanding on your computer, smartphone, tablets and
            live streaming of F2 and F3 super cup is now available
          </blockqoute>
          <br />
          <select name="select" id="">
            <option value="1">Live services on available on F1</option>
            <option value="2">Other services on available on F1</option>
          </select>
          <br />
          <button className="btn btn-danger">
            Choose your Plain <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 description_section">
          <h2>Watch Lazksport your way</h2>

          <blockqoute>
            Watch all the lazksports sessions (free practies, qualifying and the
            race) live or on demanding on your computer, smartphone, tablets and
            live streaming of F2 and F3 super cup is now available
          </blockqoute>
          <br />
          <select name="select" id="">
            <option value="1">Live services on available on F1</option>
            <option value="2">Other services on available on F1</option>
          </select>
          <br />
          <button className="btn btn-danger">
            Choose your Plain <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>

        <div className="col-md-6 image_section">
          <img
            src="https://www.formula1.com/content/dam/fom-website/subscribe-to-f1/stf1-banner-2.png"
            alt=""
          />
        </div>
      </div>

      {/* CAROUSEL AREA CLOSED TO THE FOOTER */}
      <div className="carousel_container">
        <img
          src="https://www.formula1.com/content/dam/fom-website/subscribe-to-f1/stf1-LT-background.png"
          height="650px"
          alt=""
        />
        <div className="container carousel_box">
          <h1>Live Stream</h1>
          <h5>More data More knowledge</h5>

          <div
            id="livestreaming"
            className="carousel slide"
            data-bs-ride="true">
            <div className="carousel_contanier_box">
              <div className="carouselinner">
                {/* THE TAB IN SIDE OF THE CAROUSEL */}
                <ul
                  className="nav nav-tabs carousel_tabs "
                  id="myTab"
                  role="tablist">
                  <li
                    className="nav-item carousel_tab"
                    role="presentation"
                    data-bs-target="#livestreaming"
                    data-bs-slide-to="0"
                    aria-current="true"
                    aria-label="Slide 1">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="home-tab-pane"
                      aria-selected="true">
                      <i className=" fa-solid fa-gauge-high"></i>
                    </button>
                  </li>
                  <li
                    className="nav-item carousel_tab"
                    role="presentation"
                    data-bs-target="#livestreaming"
                    data-bs-slide-to="1"
                    aria-label="Slide 2">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab-pane"
                      aria-selected="false">
                      <i className="fa fa-signal" aria-hidden="true"></i>
                    </button>
                  </li>
                  <li
                    className="nav-item carousel_tab"
                    role="presentation"
                    data-bs-target="#livestreaming"
                    data-bs-slide-to="2"
                    aria-label="Slide 3">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="contact-tab-pane"
                      aria-selected="false">
                      <i className="fa fa-microphone" aria-hidden="true"></i>
                    </button>
                  </li>
                  <li
                    className="nav-item carousel_tab"
                    role="presentation"
                    data-bs-target="#livestreaming"
                    data-bs-slide-to="3"
                    aria-label="Slide 4">
                    <button
                      className="nav-link"
                      id="disabled-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#microphone_tab_pane"
                      type="button"
                      role="tab"
                      aria-controls="#microphone_tab_pane"
                      aria-selected="false">
                      <i className=" fa-solid fa-gauge-high"></i>
                    </button>
                  </li>
                  <li
                    className="nav-item carousel_tab"
                    role="presentation"
                    data-bs-target="#livestreaming"
                    data-bs-slide-to="4"
                    aria-label="Slide 5">
                    <button
                      className="nav-link"
                      id="disabled-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#network_tab_pane"
                      type="button"
                      role="tab"
                      aria-controls="#network_tab_pane"
                      aria-selected="false">
                      <i className=" fa-solid fa-gauge-high"></i>
                    </button>
                  </li>
                </ul>

                {/* THE CONTENT OF THE TAB */}
                <div
                  className="tab-content carousel_tab_content"
                  id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabindex="0">
                    <div className="tab_content_text">
                      <h2>Hello world</h2>
                      <span>
                        Watch as drivers shave milliseconds off laps, live. See
                        who improves sector by sector.
                      </span>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabindex="1">
                    <div className="tab_content_text">
                      <h2>Hello world</h2>
                      <span>
                        Watch as drivers shave milliseconds off laps, live. See
                        who improves sector by sector.
                      </span>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact-tab-pane"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                    tabindex="2">
                    <div className="tab_content_text">
                      <h2>Hello world</h2>
                      <span>
                        Watch as drivers shave milliseconds off laps, live. See
                        who improves sector by sector.
                      </span>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="microphone_tab_pane"
                    role="tabpanel"
                    aria-labelledby="microphone_tab_pane"
                    tabindex="3">
                    <div className="tab_content_text">
                      <h2>Hello world</h2>
                      <span>
                        Watch as drivers shave milliseconds off laps, live. See
                        who improves sector by sector.
                      </span>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="network_tab_pane"
                    role="tabpanel"
                    aria-labelledby="network_tab_pane"
                    tabindex="4">
                    <div className="tab_content_text">
                      <h2>Hello world</h2>
                      <span>
                        Watch as drivers shave milliseconds off laps, live. See
                        who improves sector by sector.
                      </span>
                    </div>
                  </div>
                  <div className="d-flex carousel_navigator_container">
                    <i class="fa-solid fa-chevron-left carousel-control-prev" data-bs-target="#livestreaming" data-bs-slide="prev"></i>
                    <i class="fa-solid fa-chevron-right carousel-control-next"  data-bs-target="#livestreaming"  data-bs-slide="next"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="number_indicator">
              <h1>3</h1>
            </div>
          </div>
            
            <div className="mt-3">
            <button className="btn btn-danger" style={{backgroundColor: 'red'}}>Choose Your Plan   <i className="fa-solid fa-arrow-down"></i></button>
            </div>
        </div>
        <div className=" carsousel_image_displayer">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="..." className="d-block w-100" alt="page1" />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="Page2" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="page3" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
