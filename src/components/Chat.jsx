import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { Button } from "../components";

import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Chat = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="nav-item absolute right-5 md:right-52 top-16 bg-white border-1 border-gray-100 dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="text-lg text-semibold dark:text-gray-200">Messages</p>
          <button
            type="button"
            className="text-white  text-xs rounded p-1 px-2"
            style={{ background: currentColor }}
          >
            5 New
          </button>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          size="2xl"
          borderRadius="50%"
          bgHoverColor="light-gray"
        ></Button>
      </div>
      <div className="mt-5">
        {chatData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 items-center border-b-1 border-gray-200 p-3 leading-8 cursor-pointer"
          >
            <div className="relative">
              <img
                className="h-12 w-12 rounded-full"
                src={item.image}
                alt={item.message}
              />
              <span
                style={{ background: currentColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>
            <div>
              <p className="text-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.desc}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          borderRadius="10px"
          width="full"
          color="white"
          bgColor={currentColor}
          text="See all messages"
        />
      </div>
    </div>
  );
};

export default Chat;
