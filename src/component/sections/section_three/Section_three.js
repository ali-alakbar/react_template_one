import React, { Component } from "react";
import Media from "./Boxes/Media";
import Description from "./Boxes/Description";
import "./myStyle/style.css";

class Section_three extends Component {
  render() {
    return (
      <div
        style={{ background: this.props.background }}
        className="section section-one"
      >
        <Description
          mainColor={"#4d1c55"}
          background={this.props.background}
          title={this.props.title}
        />
        <Media
          pageName={this.props.pageName}
          newMediaProps={this.props.mediaProps}
        />
      </div>
    );
  }
}

export default Section_three;
