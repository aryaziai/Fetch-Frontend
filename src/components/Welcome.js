import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
import Testimonials from "./Testimonials";

export default class Welcome extends Component {
  render() {
    // const slides = [
    //   { title: "First item", description: "Lorem ipsum" },
    //   { title: "Second item", description: "Lorem ipsum" }
    // ];
    return (
      <div className="welcome">
        <div className="create_experience">
          Create your personalized news
          <br />
          experience
          <br />
          <Link to="/Fetch/signup">
            <h1 className="goldbutton"> Join Today</h1>
          </Link>
        </div>

        <div className="notbrands">
          <p className="bigtime">
            <img
              src="https://aryaziai.github.io/Fetch/search.png"
              width="120px"
              alt="search"
            />
            <br />
            <br />
            <b>Find Articles</b>
            <br />
            Create topics that you are interested
            <br /> in and we will do the rest.
          </p>
          <p className="bigtime">
            <img
              src="https://aryaziai.github.io/Fetch/globe.png"
              width="120px"
              alt="globe"
            />
            <br />
            <br />
            <b>Select Language</b>
            <br />
            Need your news in a different language?
            <br />
            Select from other 10 languages.
          </p>
          <p className="bigtime">
            <img
              src="https://aryaziai.github.io/Fetch/monitor.png"
              width="120px"
              alt="monitor"
            />
            <br />
            <br />
            <b>Customize Results</b>
            <br />
            Don't like a certain article in your feed?
            <br /> No worries! Just click the x icon.
          </p>
        </div>

        <div className="brands">
          <h1>Sources we use</h1>
          <div className="brandimages">
            <img
              src="https://aryaziai.github.io/Fetch/cnn.png"
              width="100px"
              alt="cnn"
            ></img>
            <br />
            <img
              src="https://aryaziai.github.io/Fetch/fox.png"
              width="200px"
              alt="fox"
            ></img>{" "}
            <br />
            <img
              src="https://aryaziai.github.io/Fetch/bbc.png"
              width="130px"
              alt="bbc"
            ></img>{" "}
            <br />& More...
          </div>
        </div>
        <h1 className="finalh1">Testimonials TEST</h1>
        <Testimonials />
        {/* <Slider infinite={true}>
          {slides.map((slide, index) => (
            <div key={index}>
              <h2>{slide.title}</h2>
              <div>{slide.description}</div>
            </div>
          ))}
        </Slider> */}
      </div>
    );
  }
}