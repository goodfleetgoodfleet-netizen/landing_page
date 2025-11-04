import React from "react";

export const WhyUsCard = ({ classIcon, header, text, iconClass, useIcon }) => {
  return (
    <div className="col-xl-4 d-flex align-items-stretch">
      <div className="icon-box mt-4 mt-xl-0">
        {useIcon ? (
          <i className={iconClass}></i>
        ) : (
          <img src={classIcon} className="mb-2" alt={header} />
        )}
        <h4>{header}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};
