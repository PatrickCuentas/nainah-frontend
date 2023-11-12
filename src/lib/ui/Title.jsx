import React from "react";

const Title = ({ name, description }) => {
  return (
    <div className="text-center my-[66px]">
      <h2 className="text-[2.125rem] leading-[110%] text-black font-semibold">
        {name.toUpperCase()}
      </h2>
      <p className="text-[1.0625rem] text-[rgba(36,50,50,0.5)] mt-4 mx-auto">
        {description}
      </p>
    </div>
  );
};

export default Title;
