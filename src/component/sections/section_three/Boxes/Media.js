import React from "react";
const Video = (props) => {
  return (
    <div
      className={
        props.pageName === "contact"
          ? `imgContainer ${"myActive2"}`
          : "imgContainer"
      }
    >
      <img className="img" src={props.newMediaProps} alt="" />
    </div>
  );
};

export default Video;
