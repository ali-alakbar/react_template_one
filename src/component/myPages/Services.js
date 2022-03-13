import React, { Component } from "react";
import SectionTwo from "../sections/section_two/Section_two";
import data from "../../JSON/data.json";

class Services extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
    };
  }
  componentDidMount() {
    this.setState({
      info: data.services,
    });
  }

  mapping(matrix) {
    return matrix.map((res, id) => (
      <div key={id} className={`serivece service-${id}`}>
        <h1>{res.title}</h1>
        <p>{res.service}</p>
      </div>
    ));
  }

  handleGlobalBackground() {
    document.querySelector("body").style.background = "#555";
  }

  render() {
    return (
      <div className={"page services"} style={this.handleGlobalBackground()}>
        <SectionTwo
          pageName={"service"}
          mainColor={"#222"}
          lightColor={"#222"}
          background={"#f3403e"}
          mediaProps={require("../sections/section_two/landingMedia/camera.gif")}
          myJSONFiles={this.mapping(this.state.info)}
        />
      </div>
    );
  }
}

export default Services;