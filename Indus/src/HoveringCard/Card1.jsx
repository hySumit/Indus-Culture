import React from "react";
import "../HoveringCard/Card1.css";

export const Card1 = () => {
  return (
    <>
      <div className="mt-[15vh] mb-[4vh]">
        <h1 className="font-bold text-3xl">Some Cool Arts</h1>
        <hr className="border-[2px] border-[#141414] mt-  w-[300px] m-auto " />
      </div>    

      <div className="body">
        <div className="inner1">
          <div className="container">
            <div className="card">
              <img
                src="https://github.com/hySumit/Foodweb/assets/112721086/6d2b0fd4-5e46-464c-91d1-de359709ec21"
                alt="Lord Krishna Image"
              />
              <div className="intro">
                <h1>Lord Krishna Painting</h1>
                <p>
                  Captured by <span>Sumit</span>
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src="https://github.com/hySumit/Foodweb/assets/112721086/92f86b5d-5375-4e86-bee5-ed950086f3ae"
                alt="Lord Ram Painting"
              />
              <div className="intro">
                <h1>Lord Ram Painting</h1>
                <p>
                  By <span>Jublie</span>
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src="https://github.com/hySumit/Foodweb/assets/112721086/2168ef84-466d-487d-b600-f9b416a1adea"
                alt="Street Art"
              />
              <div className="intro">
                <h1>Mother Nature Street Art</h1>
                <p>
                  Captured by <span>Akriti</span>
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src="https://github.com/hySumit/Foodweb/assets/112721086/f636e072-2e8b-4185-9bb4-edfa8eff7cd4"
                alt="Wild"
              />
              <div className="intro">
                <h1>Wilde Life Painting</h1>
                <p>
                  By <span>Jublie</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
