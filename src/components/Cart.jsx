import React from 'react'
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Button } from ".";
import { cartData } from "../data/dummy";

const Cart = () => {
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <Button
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          ></Button>
        </div>
        {cartData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 p-4 border-b-1 border-color dark:border-gray-600 leading-8"
          >
            <div className="float-left">
              <img
                className="w-24 h-80 rounded-lg"
                src={item.image}
                alt=""
              ></img>
            </div>
            <div className="float-right">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                {item.category}
              </p>
              <div className="flex gap-4 mt-2 items-center">
                <p className="font-semibold text-lg">{item.price}</p>
                <div className="flex items-center border-1 border-color border-r-0 rounded">
                  <button
                    type="button"
                    className="border-r-1 border-color dark:border-gray-500 text-green-600 items-center p-2"
                  >
                    <AiOutlinePlus />
                  </button>
                  <p className="w-fit border-r-1 border-color dark:border-gray-500 items-center p-2 text-green-600">
                    0
                  </p>
                  <button
                    type="button"
                    className="border-r-1 border-color dark:border-gray-500 text-red-600 items-center p-2"
                  >
                    <AiOutlineMinus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center mt-3">
          <span className=" text-gray-500 dark:text-gray-200 text-lg">
            Sub Total
          </span>
          <span className="font-semibold text-lg">$890</span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className=" text-gray-500 dark:text-gray-200 text-lg">
            Total
          </span>
          <span className="font-semibold text-lg">$890</span>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor="rgb(3,201,215)"
            size="1xl"
            borderRadius="10px"
            text="Place Order"
            width="full"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Cart