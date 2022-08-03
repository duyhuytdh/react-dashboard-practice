import React from 'react'
import { MdOutlineCancel } from "react-icons/md";

const Cart = () => {
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400">
        <div className="p-2 m-2 flex">
          <p>Shopping Cart</p>
          <MdOutlineCancel className="float-right" />
        </div>
      </div>
    </div>
  );
};

export default Cart