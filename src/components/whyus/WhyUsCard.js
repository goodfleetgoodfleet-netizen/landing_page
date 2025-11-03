import React from "react";

export const WhyUsCard = ({ classIcon, header, text }) => {
  return (
    <div className="col-xl-4 d-flex align-items-stretch">
      <div className="icon-box mt-4 mt-xl-0">
        <img src={classIcon} className="mb-2"></img>
        <h4>{header}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};
