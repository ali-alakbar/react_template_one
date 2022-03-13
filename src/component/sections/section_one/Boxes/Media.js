import React from "react";
const Video = (props) => {
  return (
    <div
      className={
        props.pageName === "service"
          ? `imgContainer ${"myActive"}`
          : "imgContainer"
      }
    >
      <img className="img" src={props.newMediaProps} alt="" />
    </div>
  );
};

export default Video;
