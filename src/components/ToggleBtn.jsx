import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeDurationToMonthly } from "../store/durationStatus";

const ToggleBtn = ({ leftName, rightName }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex align-middle">
      <span className="mr-3 mt-1 text-md font-medium text-gray-900 dark:text-gray-300">
        {leftName}
      </span>
      <label className="inline-flex items-center me-5 cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={() => dispatch(changeDurationToMonthly())}
        />
        <div
          className={`relative bg-gray-200 rounded-full  peer-focus:ring-purple-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600 w-11 h-6`}
        ></div>
        <span
          className={`ms-3 text-md font-medium text-gray-900 dark:text-gray-300`}
        >
          {rightName}
        </span>
      </label>
    </div>
  );
};
export default ToggleBtn;
