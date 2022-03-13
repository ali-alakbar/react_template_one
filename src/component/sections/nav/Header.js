import React, { Component, Fragment } from "react";
import "./myStyle/style.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      switcher: false,
    };
    this.handleSwitcher = this.handleSwitcher.bind(this);
  }

  handleSwitcher() {
    const { switcher } = this.state;
    this.setState({
      switcher: !switcher,
    });
    const barList = document.querySelector(".list-two");
    if (switcher === false) {
      barList.classList.add("active");
    } else {
      barList.classList.remove("active");
    }
  }

  render() {
    return (
      <Fragment>
        <section className="header-section">
          <ul className="list list-one">
            <li>
              <NavLink className="link link-home" to="/Home.js">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link link-services" to="/Services.js">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink className="link link-contact" to="/Contact.js">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="link link-aboutUs" to="/About.js">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link link-FAQs" to="/FAQ.js">
                FAQs
              </NavLink>
            </li>
          </ul>
          <div className="iconContainer" onClick={this.handleSwitcher}>
            <FontAwesomeIcon icon={faBars} className="icon icon-bar" />
          </div>
        </section>
        {/* Hidden List Below*/}
        <ul className="list list-two">
          <li>
            <NavLink className="link link-home" to="/Home.js">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link link-aboutUs" to="/About.js">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="link link-contact" to="/Contact.js">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="link link-services" to="/Services.js">
              Services
            </NavLink>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default Header;
