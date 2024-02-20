"use client";

import UserCard from "@/components/UserCard";
import UserInfo from "@/components/UserInfo";
import userData from "@/data.json";
import { useState } from "react";

export default function Home() {
  const data = userData.users;
  const [currentData, setCurrentData] = useState(data.slice(0, 10));
  const [currentPage, setCurrentPage] = useState(1);
  const [vision, setVision] = useState(false);
  const onHandlePre = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
      setCurrentData(
        data.slice(10 * (currentPage - 2), 10 * (currentPage - 1))
      );
    } else {
      setCurrentPage(data.length / 10);
      setCurrentData(data.slice(10 * (data.length / 10 - 1), data.length));
    }
  };
  const onHandleNext = () => {
    if (currentPage != 3) {
      setCurrentPage(currentPage + 1);
      setCurrentData(data.slice(10 * currentPage, 10 * (currentPage + 1)));
    } else {
      setCurrentPage(1);

      setCurrentData(data.slice(0, 10));
    }
  };
  const [index, setIndex] = useState(-1);
  const onHandleShow = (index) => {
    setVision(true);
    setIndex(index + (currentPage - 1) * 10);
  };
  return (
    <main>
      <div className="relative flex justify-center">
        <div
          className={`w-[90%] h-[800px] bg-white absolute z-100 mt-[30px] border-[10px] border-gray-400 rounded-[30px]
         ${vision === false ? "hidden" : ""}`}
        >
          <div>
            <div
              className="font-bold text-[20px] flex justify-end 
            text-black mr-[30px] cursor-pointer hover:text-red-600 mt-[10px]"
              onClick={() => setVision(false)}
            >
              Close
            </div>
            <div className="text-blue-900 font-bold text-[45px] flex justify-center">
              User Info
            </div>
          </div>
          <div className="text-black">
            <UserInfo data={data[index]} />
          </div>
        </div>
        <div className="absolute z-[-1]">
          <div className="text-blue-500 text-[60px] flex justify-center pt-[50px] font-bold">
            Dashboard
          </div>
          <div className="flex flex-wrap justify-center">
            {currentData.map((value, index) => (
              <div
                className="min-w-[300px] flex justify-center"
                onClick={() => onHandleShow(index)}
              >
                <UserCard userData={value} />
              </div>
            ))}
          </div>
          <div className="flex justify-end mb-[60px] mr-[100px]">
            <div className="flex">
              <div
                className="bg-white border-[4px] border-gray-400 mx-[10px] rounded-[12px] cursor-pointer 
            hover:bg-gray-400 hover:text-white
           text-black"
                onClick={() => onHandlePre()}
              >
                <div className="p-[10px] font-bold">P</div>
              </div>
              <div className="p-[10px] font-bold">
                {currentPage} / {data.length / 10}
              </div>
              <div
                className="bg-white border-[4px] border-gray-400 mx-[10px] rounded-[12px] cursor-pointer
          hover:bg-gray-400 hover:text-white
          text-black"
                onClick={() => onHandleNext()}
              >
                <div className="p-[10px] font-bold">N</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
