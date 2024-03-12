import React from "react";
import uk from "../../assets/uk.jpg";
import pcc from "../../assets/pkk.jpg";
import { useState } from "react";

export const Home1 = () => {
  return (
    <div>
      <section className="section1">
        <div className="h1div text-center">
          <h1 className="text-2xl mb-2 text-[#3f3f3f] ">
            Welcome to <br />{" "}
            <span className="text-3xl font-bold">Indus Culture</span>
          </h1>
        </div>

        <div className="bg1 relative">
          <img src={uk} alt="" className="w-full h-auto" />
          <div className="inner absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white fn ">
              India is Country of so many{" "}
              <span>
                <a href="#" className="underline">
                  Cultures
                </a>
              </span>{" "}
              and
              <span>
                <a href="#" className="underline">
                  Arts
                </a>
              </span>
            </h1>
            <div>

            <button className="bg-white text-black px-4 py-2 rounded mt-4">
              
            </button>
            </div>

            
          </div>
        </div>

        <div className="whyIndus flex flex-col items-center mt-8">
          <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-gray-300 p-4 text-center rounded">
            <h1 className="font-bold text-3xl mb-4">Why Indus Culture?</h1>
            <p>
              India is full of hidden talent in arts and cultures, but often
              there is insufficient support. At Indus Culture, we showcase and
              support artists by selling their unique creations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

