import React, { Component } from "react";
import Media from "./Boxes/Media";
import "./myStyle/style.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay"; 
class Section_two extends Component {

  render() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
      <div
        style={{ background: this.props.background }}
        className="section section-two"
      >
        <AutoplaySlider
          play
          cancelOnInteraction={false}
          interval={3000}
          className="leftSide"
        >
          {this.props.myJSONFiles}
        </AutoplaySlider>
        <Media
          pageName={this.props.pageName}
          newMediaProps={this.props.mediaProps}
        />
      </div>
    );
  }
}

export default Section_two;
