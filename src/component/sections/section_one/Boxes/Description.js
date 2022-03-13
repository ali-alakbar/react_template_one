import React from "react";
import Btn from "../../button/Btn";

const Description = (props) => {
  return (
    <div className="description">
      <h1 style={{ color: props.mainColor }} className="landingTitle">
        {props.title}
      </h1>
      <p  style     ={{ color: props.lightColor }} 
          className ="landingDesc">
        {props.description}
      </p>
      <Btn
        mainColor   ={props.mainColor}
        background  ={props.background}
        classname   ={`btn-two`}
        btn         ={props.btn}
      />
    </div>
  );
};

export default Description;
