import React from "react";
import { Link, NavLink } from "react-router-dom";


const SocialIcon = ({ Icons }) => {
  return (
    <div className="text-cyan-600">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-[12px] bg-gray-700 mx-1.5 text-2xl hover:text-gray-100 hover:bg-teal-500
        duration-300 w-10 h-10 justify-center"
        >
        <Link to={icon.link}>
         <ion-icon name={icon.name}></ion-icon>
        </Link>
        </span>
      ))}
    </div>
  );
};

export default SocialIcon;