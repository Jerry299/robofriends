import React from "react";

const Card = props => {
  return (
    <div
      className=" tc bg-light-green pa3 dib br3 ma3 grow bw2 shadow-5 "
      style={{ width: "19rem", height: "22rem" }}
    >
      <img
        src={`${props.flag}`}
        alt="robots "
        style={{ width: "4rem", height: "40px" }}
      />
      <br />
      <div>
        <h2>
          Country Name: <span>{props.name}</span>
        </h2>
        <h2 style={{ color: "green", fontFamily: "Cabin, sans-serif" }}>
          Location: {props.location}
        </h2>
        <h3>
          Capital : <span style={{ color: "green" }}>{props.capital}</span>
        </h3>
        <h3>
          Population :{" "}
          <span style={{ color: "tomato" }}>{props.population} (Est.)</span>
        </h3>
      </div>
    </div>
  );
};

export default Card;
