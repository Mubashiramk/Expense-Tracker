import React from "react";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="h-[100%] flex-col align-center w-[8.33%] item-center md:m-auto ">
      <div className="h-[85%] p-0 relative w-[70%] bg-white border-solid  border-2 border-[#313131] rounded-[12px]  flex-col justify-end md:w-[65%]">
        <div
          //bg-[#c3b4f3]
          className="bg-yellow-200 absolute rounded-[10px]  w-[100%] m-0  bottom-0"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="text-bold font-sm text-[10px] pt-[7px] text-center md:text-[14px] ">
        {props.label}
      </div>
    </div>
  );
};

export default ChartBar;
