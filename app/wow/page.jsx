"use client";
import React from "react";

const page = () => {
  return (
    <div>
      <form action="">
        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.files[0]);
          }}
          name=""
          id=""
        />
      </form>
    </div>
  );
};

export default page;
