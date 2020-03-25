import React from "react";
import Card from "../components/Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].name}
            id={robots[i].name}
            name={robots[i].name}
            flag={robots[i].flag}
            location={robots[i].region}
            capital={robots[i].capital}
            population={robots[i].population}
            currency={robots[i].currency}
          />
        );
      })}
    </div>
  );
};
export default CardList;
