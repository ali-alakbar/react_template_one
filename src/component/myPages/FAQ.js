import React, { Component } from "react";
import SectionTwo from "../sections/section_two/Section_two";
import data from '../../JSON/data.json'

class FAQ extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
    };
  }
  componentDidMount() {
    this.setState({
      info: data.contact.questions,
    });
  }

  mapping(matrix) {
    return matrix.map((res, id) => (
      <div key={id} className={`contact contact-${id}`}>
        <a href={res.destination}>{res.question}</a>
      </div>
    ));
  }

  handleGlobalBackground() {
    document.querySelector("body").style.background = "#3a6e9c";

  }

  render() {
    return (
      <div className={"page FAQ"} style={this.handleGlobalBackground()}>
        <SectionTwo
          pageName={"FAQ"}
          background={"#8d9bab"}
          mediaProps={require("../sections/section_two/landingMedia/robot9.webp")}
          myJSONFiles = {this.mapping(this.state.info)}
        />
      </div>
    );
  }
}

export default FAQ;
