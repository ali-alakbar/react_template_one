import React, { Component } from "react";
import SectionThree from "../sections/section_three/Section_three";
import data from "../../JSON/data.json";

class Contact extends Component {
  handleGlobalBackground() {
    document.querySelector("body").style.background = "#f2e4e5";
  }

  render() {
    return (
      <div className={"page contact"} style={this.handleGlobalBackground()}>
        <SectionThree
          title={data.contact.title}
          pageName={"contact"}
          mainColor={"#222"}
          lightColor={"#222"}
          background={"#faf3f3"}
          mediaProps={require("../sections/section_three/landingMedia/robot.webp")}
        />
      </div>
    );
  }
}

export default Contact;
