import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";

export default function Interests(props) {
  const { location } = useContext(HomeContext);

  return (
    <Link to={props.routte}>
      <div className="w-auto h-[141px] lg:h-[169px] flex items-center text-primary-very-light-grey border rounded-[10px] shadow-myBoxShadow relative">
        <div className="px-[20px] flex flex-col items-cente justify-center">
          {location != '' && 
            <p className={`${props.display} rounded-md text-[10px] text-white font-semibold py-[3px] px-[5px] right-2 top-2`}>Coming Soon!</p>
          } 
          <img src={props.src} alt="icon" className="w-[30px] h-[30px]" />
          <p
            className={`text-[16px] lg:text-[18px] mt-[11px] font-medium ${
              location !== ""
                ? "text-primary-red"
                : "text-primary-very-light-grey"
            }`}
          >
            {props.head}
          </p>
          <p
            className={`text-[14px] mt-[7px] font-normal ${
              location !== ""
                ? "text-primary-grey"
                : "text-primary-very-light-grey"
            }`}
          >
            {props.desc}
          </p>
        </div>
      </div>
    </Link>
  );
}
