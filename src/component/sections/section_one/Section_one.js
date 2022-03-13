import React, { Component } from "react";
import Media from "./Boxes/Media";
import Description from "./Boxes/Description";
import "./myStyle/style.css";


class Section_one extends Component {
  render() {
    return (
      <div
        style={{ background: this.props.background }}
        className="section section-one"
      >
        <Description
          mainColor={this.props.mainColor}
          lightColor={this.props.lightColor}
          background={this.props.background}
          title={this.props.title}
          description={this.props.description}
          btn={this.props.btn}
        />
        <Media
          pageName={this.props.pageName}
          newMediaProps={this.props.mediaProps}
        />
      </div>
    );
  }
}

export default Section_one;
