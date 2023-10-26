import React from "react";

const Title = ({ name, description }) => {
  return (
    <div className="text-center my-[66px]">
      <h2 className="text-5xl text-black font-bold">{name.toUpperCase()}</h2>
      <p className="text-xs lg:text-lg text-[rgba(36,50,50,0.5)] mt-4 mx-auto">
        {description}
      </p>
    </div>
  );
};

export default Title;
