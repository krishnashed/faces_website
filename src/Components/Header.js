import React, {useState, useEffect} from "react";
import Logo from "../Assets/Intel-nav.svg";

const Header = ({timer, setTimer, lastUpdatedOn}) => {

  const [time, setTime] = useState("5s");

  return (
    <nav className="px-28  py-4 bg-[#e5e5e5] text-[#0068B5] text-xl">
      {console.log("lastUpdatedOn = ", lastUpdatedOn)}
      <div className="container flex flex-wrap items-center justify-between px-6 mx-auto">
        <a href="/#" className="flex items-center">
          <img
            src={Logo}
            className="self-center font-bold text-xl font-semibold whitespace-nowrap dark:text-white"
          />
        </a>

        <div className="dropdown text-sm">
          <div className="flex ">
          <h2 className="p-2">Last updated on : {lastUpdatedOn}</h2>
          <div>
  <button className="border-2 border-[#00477C] hover:bg-[#00477C] hover:text-white p-1 px-2 rounded inline-flex items-center">
    <span className="mr-1">{time}</span>
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
  </button>
  <ul className="dropdown-menu w-[75px] absolute hidden text-gray-700 pt-1">
    <li><button onClick={ () => {setTime("5s"); setTimer(5);} } className="rounded-t bg-[#fafafa] hover:bg-[#00477C] hover:text-white py-1 px-4 block whitespace-no-wrap w-full">5s</button></li>
    <li><button onClick={ () => {setTime("10s"); setTimer(10);} } className="bg-[#fafafa] hover:bg-[#00477C] hover:text-white py-1 px-4 block whitespace-no-wrap w-full">10s</button></li>
    <li><button onClick={ () => {setTime("15s"); setTimer(15);} } className=" bg-[#fafafa] hover:bg-[#00477C] hover:text-white py-1 px-4 block whitespace-no-wrap w-full">15s</button></li>
    <li><button onClick={ () => {setTime("30s"); setTimer(30);} } className="bg-[#fafafa] hover:bg-[#00477C] hover:text-white py-1 px-4 block whitespace-no-wrap w-full ">30s</button></li>
    <li><button onClick={ () => {setTime("1m"); setTimer(60);} } className="rounded-b bg-[#fafafa] hover:bg-[#00477C] hover:text-white py-1 px-4 block whitespace-no-wrap w-full">1m</button></li>
  </ul>
  </div>
          </div>
          
  
</div>
      </div>
    </nav>
  );
};

export default Header;
