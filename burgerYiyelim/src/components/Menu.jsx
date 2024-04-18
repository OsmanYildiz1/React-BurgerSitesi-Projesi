import React from "react";
import { Data } from "../helpers/Data";
import MenuItem from "./MenuItem";
import "../styles/Menu.css";
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {/* menuItem Data'nın içerisindeki dizinin içindeki her bir objeye karşılık gelir */}
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
