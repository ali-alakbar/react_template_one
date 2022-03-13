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
            <Route path="/react_template_one/" className="active" element={<Home />} />
            <Route path="/Home.js" className="active" element={<Home />} />
            <Route path="/About.js" className="active" element={<About />} />
            <Route path="/Services.js" className="active" element={<Services />} />
            <Route path="/Contact.js" className="active" element={<Contact />} />
            <Route path="/FAQ.js" className="active" element={<FAQ />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
