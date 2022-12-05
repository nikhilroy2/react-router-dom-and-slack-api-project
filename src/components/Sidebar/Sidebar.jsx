import React from "react";
import Logo from "../../imgs/logo.png";
import "./Sidebar.css";

import { SidebarData } from "../../Data/Data";
import { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      {/*logo*/}
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      {/*menu*/}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <Link to={item.heading} className={selected === index ? "menuItem active" : "menuItem"} key={index}

            onClick={() => setSelected(index)}
            
              >
              <item.icon />
              <span>{item.heading}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
