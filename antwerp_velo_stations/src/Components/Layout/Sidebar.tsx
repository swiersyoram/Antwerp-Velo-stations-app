import React from "react";
import { Router, Routes } from "react-router-dom";
import "../../Styles/Sidebar.css";
type Props = {};
const routes = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192 512"
        className="h-10 fill-veloorange routeicon"
      >
        <path d="M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="h-8 fill-veloorange routeicon"
      >
        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        className="h-8 fill-veloorange routeicon"
      >
        <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
      </svg>
    ),
  },
];
const externallinks = [
  { url: "https://www.velo-antwerpen.be/", img: "assets/images/veloLogo.svg" },

  { url: "https://www.antwerpen.be/", img: "assets/images/antwerpLogo.svg" },
];
function Sidebar({}: Props) {
  return (
    <div className="h-full w-16 flex flex-col justify-between">
      <div className="grid grid-cols-1 grid-rows-3  ">
        {routes.map((route) => (
          <div className="duration-300 hover:bg-veloorange hover:cursor-pointer flex routewrapper">
            <div className=" w-fit h-fit m-auto  py-3 ">
              <a href="">{route.icon}</a>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 grid-rows-2  ">
        {externallinks.map((link) => (
          <div className="  h-fit m-auto w-10  py-3 ">
            <a href={link.url} target="_blank">
              <img src={link.img} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;