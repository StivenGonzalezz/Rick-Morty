import React from "react";

const Aside = (props) => {
  return (
      <ul className={`flex flex-col justify-around h-[97%] mt-3 bg-gray-600 w-[17.5%] text-center text-green-500 ${props.className}`}>
        {props.characters.map((personaje) => {
          return <li className="w-[90%] h-[15%] "><img className="mx-1" src={personaje.image} alt="" /></li>;
        })}
      </ul>
  );
};

export default Aside;
