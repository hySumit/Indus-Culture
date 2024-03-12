import React, { useContext } from "react";
import "../HoveringCard/Card1.css";
import { Context } from "../components/Auth/Context";

export const Card2 = ({image,price,source,rating,name}) => {
    const {data} = useContext(Context)
  return (
    <>
      <div className="body">
        <div className="inner1">
          <div className="container">
            {data.map((e)=>(
                <div key={e.id} className="card">
                    <img src={e.image} alt={e.name} />
                    <div className="intro">
                        <h1>{e.name}</h1>
                        <p>Source : <span>{e.source}</span> </p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
