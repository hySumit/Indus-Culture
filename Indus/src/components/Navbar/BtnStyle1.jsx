import React from "react";
import '../Navbar/BtnStyle.css'

export const BtnStyle1 = ({val}) => {
  return (
    <>
      <div class="container">
        <div class="center">
          <button class="btn">
            <svg
              width="100px"
              height="40px"
              viewBox="0 0 180 60"
              class="border"
            >
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
            <span>{val}</span>
          </button>
        </div>
      </div>
    </>
  );
};
