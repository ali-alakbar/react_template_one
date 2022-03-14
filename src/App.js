import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/myPages/Home";
import About from "./component/myPages/About";
import Services from "./component/myPages/Services";
import Contact from "./component/myPages/Contact";
import FAQ from "./component/myPages/FAQ";
import Header from "./component/sections/nav/Header";
import HeaderContent from "./component/sections/content header/HeaderContent";
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContent />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/react_template_one"  element={<Home />}/>
            <Route path="/Home.js"  element={<Home />} />
            <Route path="/About.js"  element={<About />} />
            <Route path="/Services.js"  element={<Services />} />
            <Route path="/Contact.js"  element={<Contact />} />
            <Route path="/FAQ.js" element={<FAQ />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
// className="active"

export default App;
