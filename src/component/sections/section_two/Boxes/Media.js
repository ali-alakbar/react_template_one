import React from "react";
const Video = (props) => {
  return (
    <div className={"imgContainer"}>
      <img className="img" src={props.newMediaProps} alt="" />
    </div>
  );
};

export default Video;
