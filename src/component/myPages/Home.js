import React, { Component } from "react";
import SectionOne from "../sections/section_one/Section_one";
import data from "../../JSON/data.json";

class Home extends Component {
  handleGlobalBackground() {
    document.querySelector("body").style.background = "#dbceec";
  }

  
  render() {
    return (
      <div className={"page home"} style={this.handleGlobalBackground()}>
        <SectionOne
          mainColor={"#4d1c55"}
          lightColor={"#4a1952ba"}
          background={"#f7ffff"}
          title={data.home.section_one.description.title}
          description={data.home.section_one.description.subTitle}
          btn={data.home.section_one.description.btn}
          mediaProps={require('../sections/section_one/landingMedia/design.gif')}
        />
        <span className="bubble bubble-one"></span>
        <span className="bubble bubble-two"></span>
        <span className="bubble bubble-three"></span>
      </div>
    );
  }
}

export default Home;