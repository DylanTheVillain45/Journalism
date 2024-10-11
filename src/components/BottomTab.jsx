import React from "react";
import JournalismLogo from "../assets/JournalismLogo.png";

function BottomTab() {
  return (
    <div className="h-28 flex flex-row items-center bg-red mt-10 rounded-t-xl">
      <h2 className="text-2xl font-extrabold text-white ml-8">
        Dylan Productions
      </h2>
      <img src={JournalismLogo} alt="" className="h-20 ml-auto mr-8" />
    </div>
  );
}

export default BottomTab;
