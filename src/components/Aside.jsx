import React from "react";

const Aside = (props) => {
  return (
      <ul className={`flex flex-col justify-around items-center h-[97%] mt-3 bg-gray-600 w-[11%] text-center`}>
        {props.characters.map((personaje) => {
          return <li className="flex justify-center w-[90%] h-[15%] "><img className=" m-0 h-[100%] " src={personaje.image} alt="" /></li>;
        })}
      </ul>
  );
};

export default Aside;
