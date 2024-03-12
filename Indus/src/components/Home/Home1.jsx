import React from "react";
import uk from "../../assets/uk.jpg";
import pcc from "../../assets/pkk.jpg";
import { useState } from "react";

export const Home1 = () => {
  return (
    <div>
      <section className="section1">
        <div className="h1div">
          <h1 className="text-2xl mb-2 text-[#3f3f3f] ">
            Welcome to <br />{" "}
            <span className="text-3xl font-bold">Indus Culture</span>
          </h1>
        </div>

        <div className="bg1">
          <img src={uk} alt="" />
          <div className="inner">
            <h1>
              India is Country of so many{" "}
              <span>
                <a href="#">Cultures</a>
              </span>{" "}
              and
              <span></span>{" "}
              <span>
                <a href="#">Arts</a>
              </span>
            </h1>
            <div></div>
            <button>Explore</button>
          </div>
        </div>

        <div className="whyIndus flex justify-center">
          <div className="w-[300px] h-[100px] solidbg flex items-center justify-center">
            <h1 className="font-bold text-3xl">Why Indus Culture ?</h1>
          </div>
          <div className="null w-[570px] flex items-center">
            <p>India is a full of Hidden talent arts, and Cultures but no one suppports there for We Indus Culture giving showing our arts and supporting our artis by selling thier Arts</p>
          </div>
        </div>
      </section>
    </div>
  );
};
