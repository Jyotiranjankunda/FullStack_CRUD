import logo from "../assets/logo.png";
import Menu from "./Menu";
import {
  faGaugeHigh,
  faUsers,
  faBookBookmark,
  faChartPie,
  faGear,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <>
      <div className="md:hidden">
        <FontAwesomeIcon
          icon={faBars}
          onClick={handleToggle}
          className="text-lg p-1 cursor-pointer absolute top-4 left-4 z-50 bg-white"
        />
      </div>
      <div
        className={`bg-white h-[100vh] p-4 flex flex-col items-start sidebar absolute z-40 md:relative top-0 left-0 transition-transform ${
          isClicked ? "translate-x-0" : "-translate-x-full"
        } md:block md:translate-x-0`}
      >
        <img src={logo} alt="Logo" className="w-24 mt-10 md:mt-3 bg-white" />
        <ul className="flex flex-col mt-3 bg-white">
          <Menu icon={faGaugeHigh} link="/" text="Dashboard" />
          <Menu icon={faUsers} link="/" text="Students" selected="true" />
          <Menu icon={faBookBookmark} link="/" text="Chapter" />
          <Menu icon={faCircleQuestion} link="/" text="Help" />
          <Menu icon={faChartPie} link="/" text="Reports" />
          <Menu icon={faGear} link="/" text="Settings" />
        </ul>
      </div>
      {isClicked && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={handleToggle}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
