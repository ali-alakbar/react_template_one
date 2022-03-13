import React, { Component } from "react";
import SectionOne from "../sections/section_one/Section_one";
import data from "../../JSON/data.json";

class About extends Component {
  handleGlobalBackground() {
    document.querySelector("body").style.background = "#9a96a3";
  }

  render() {
    return (
      <div className={"page about"} style={this.handleGlobalBackground()}>
        <SectionOne
          mainColor={"#584863"}
          lightColor={"#98919e"}
          background={"#f7f1ef"}
          title={data.home.about.description.title}
          description={data.home.about.description.subTitle}
          btn={data.home.about.description.btn}
          mediaProps={require("../sections/section_one/landingMedia/myself2.webp")}
        />
      </div>
    );
  }
}

export default About;
