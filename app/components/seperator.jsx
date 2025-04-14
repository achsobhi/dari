import React from "react";

const Seperator = ({title}) => {
  return (
    <div style={{
      marginBottom:"50px"
    }}>
      <div className="flex items-center my-10">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 text-xl">
            {title}
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
    </div>
  );
};

export default Seperator;
