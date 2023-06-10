import React from "react";

export default function Body() {
  return (
    <>
      <div className="body">
        {/* <div className="show">
          {/* <img src={require('./avatar.jpg')} alt="Imag1" /> */}
          {/* <ReactPlayer url="./Avatar2.mkv"  playing={true} loop={true} controls={true} width="100%" height="100%" /> */}
        {/* </div> */} 
        <div className="Remaining">
          <div className="main">
            <div className="details">
              <div className="film_name">
                {/* <img src={require('./Avatar The Way of Water.png')} alt="Image" /> */}
              </div>
              <div className="date">  
                2022 • 3h 12m • 6 Languages • <span id="age">U/A 13+</span>
              </div>
              <div className="description">
                Set more than a decade after the first film, dive into the story
                of the Sully family; the lengths they go toe keep each other
                safe and the tragedies they endure.
              </div>
              <div className="genre">
              Science Fiction | Action | Adventure | Fantasy
              </div>
              <div className="watch">
              <button id ="now">
              <span className="play"><i className="fa-solid fa-play"></i></span>  
          Watch now
            </button>
              <button id ="now1">
               +
            </button>
              </div>
            </div>
          </div>
          <div className="title">
            <h2>Latest and Trending</h2>
          </div>
          <div className="Trending">
            <div className="card">
              <img src={require("./p1.jpg")} alt="imag" />
            </div>
            <div className="card">
              <img src={require("./p2.png")} alt="imag" />
            </div>
            <div className="card">
              <img src={require("./p1.jpg")} alt="imag" />
            </div>
            <div className="card">
              <img src={require("./p1.jpg")} alt="imag" />
            </div>
            <div className="card">
              <img src={require("./p1.jpg")} alt="imag" />
            </div>
            <div className="card">
              <img src={require("./p1.jpg")} alt="imag" />
            </div>
            <div className="card">
              <img src={require("./p1.jpg")} alt="imag" />
            </div>
          </div>
          <div className="title">
            <h2>Latest and Trending</h2>
          </div>
          <div className="Trending">
            <div className="card">
              <img src={require("./p1.jpg")} alt="imag" />
            </div>
            <div className="card">
              <img src={require("./p2.png")} alt="imag" />
            </div>
            <div className="card">
              <img src={require("./p1.jpg")} alt="imag" />
            </div>
            <div className="card">
              <img src={require("./p1.jpg")} alt="imag" />
            </div>
            <div className="card">
              <img src={require("./p1.jpg")} alt="imag" />
            </div>
            <div className="card">
              <img src={require("./p1.jpg")} alt="imag" />
            </div>
            <div className="card">
              <img src={require("./p1.jpg")} alt="imag" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
