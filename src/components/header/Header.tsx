import React from "react";
import Drabdown from "./Drabdown";

const Header = () => {
  return (
    <header>
      <div className="container px-24 py-24 mx-auto ">
        <div className="flex items-center flex-wrap justify-between">
          <div>
            <input
              className="h-8 border rounded-sm w-62 "
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center ">
            <Drabdown />
            <Drabdown />
            <button className="text-white">Add</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
