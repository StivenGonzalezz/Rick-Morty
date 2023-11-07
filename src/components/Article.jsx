import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { LiaTransgenderAltSolid } from "react-icons/lia";
import { FaDna } from "react-icons/fa";
import { MdFaceUnlock, MdOutlineFaceRetouchingOff } from "react-icons/md";

const Article = (props) => {
  return (
    <article class="mb-[15px] w-[40%] h-[30%] flex border-[2px] border-solid border-black bg-gray-700 items-center">
              <img className="w-[80%] h-[80%] border-[1px] border-solid border-white" src={props.personaje.image} alt="" />
              <div className="w-[80%] h-[80%]">
                <hgroup>
                  <h2 class="characterTittle text-center text-4xl text-red-700">
                    {props.personaje.name}
                  </h2>
                </hgroup>
                <div className="text-2xl m-0 flex flex-col gap-3 text-white">
                  <p className="flex m-0 items-center">
                    {props.personaje.status === "Alive" ? (<MdFaceUnlock />) : (<MdOutlineFaceRetouchingOff />)}
                    {props.personaje.status}
                  </p>
                  <p className="flex m-0 item s-center">
                    <FaDna />
                    {props.personaje.species}
                  </p>
                  <p className="flex m-0 items-center">
                    <LiaTransgenderAltSolid />
                    {props.personaje.gender}
                  </p>
                  <p className="flex m-0 items-center">
                    <IoLocationSharp />
                    {props.personaje.location.name}
                  </p>
                </div>
              </div>
    </article>
  );
};

export default Article;
