import React, { Fragment } from "react";

const Btn = (props) => {
  return (
    <Fragment>
      <button
        style={{
          background: props.background,
        }}
        className={`btn`}
      >
        {props.btn}
      </button>
    </Fragment>
  );
};
export default Btn;
