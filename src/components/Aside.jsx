import React from "react";

const Aside = (props) => {
  return (
      <ul className={`flex flex-col justify-around items-center h-[97%] mt-3 w-[11%] text-center mr-2`}>
        {props.characters.map((personaje) => {
          return <li className="flex justify-center w-[90%] h-[15%] "><img className=" border-[1px] border-solid border-white m-0 h-[100%] hover:scale-105 transition-all ease-in " src={personaje.image} alt="" /></li>;
        })}
      </ul>
  );
};

export default Aside;
