import React from "react";
import Btn from "../../button/Btn";

const Description = (props) => {
  return (
    <div className="description">
      <h1 style={{ color: props.mainColor }} className="landingTitle">
        {props.title}
      </h1>
      <form action="">
        <div className="wrapper">
          <input
            placeholder="Usename..."
            required
            type="text"
            className="username"
          />
        </div>
        <div className="wrapper">
          <input
            placeholder="Email..."
            required
            type="email"
            className="email"
          />
        </div>
        <div className="wrapper">
          <textarea placeholder="Message..." required className="textArea" />
        </div>
      </form>
      <Btn btn= "Send"/>
    </div>
  );
};

export default Description;
