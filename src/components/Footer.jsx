import React from 'react'

const Footer = () => {
  return (
    <div className="mt-28 mb-10">
      <p className="text-sm text-center text-gray-500 dark:text-gray-200 m-2">
        @2022 Duy Huy - Practice <a target="blank" style={{ textDecoration: "underline" }} href="https://reactjs.org/">ReactJs</a>, <a target="blank" style={{ textDecoration: "underline" }} href="https://www.syncfusion.com/">Syncfusion</a>, <a target="blank" style={{ textDecoration: "underline" }} href="https://tailwindui.com/">Tailwind</a>
      </p>
      <p className="text-xs text-center text-gray-500 dark:text-gray-200 m-2">
        Reference:{" "}
        <a target="blank" style={{ textDecoration: "underline" }} href="https://www.youtube.com/watch?v=jx5hdo50a2M">
          Javascript Mastery Channel
        </a>
      </p>
    </div>
  );
}

export default Footer