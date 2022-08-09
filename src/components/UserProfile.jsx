import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { Button } from "../components";

import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";

const UserProfile = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="nav-item absolute right-5 md:right-28 top-16 bg-white border-1 border-gray-100 dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="text-lg text-semibold dark:text-gray-200">
            User Profile
          </p>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          size="2xl"
          borderRadius="50%"
          bgHoverColor="light-gray"
        ></Button>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {" "}
            Clark Ken{" "}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {" "}
            Developer{" "}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {" "}
            develop@shop.com{" "}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex items-center leading-8 border-b-1 border-gray-200 gap-5 p-4 cursor-pointer hover:bg-light-gray dark:hover:bg-gray-400"
          >
            <button
              type="button"
              className="flex rounded-md items-center gap-5 p-2 text-center text-2xl"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
            >
              {item.icon}
            </button>

            <div>
              <p className="text-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.desc}
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
          text="Logout"
        />
      </div>
    </div>
  );
};

export default UserProfile