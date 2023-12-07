import React from "react";

const Loading = () => {
  return (
    <div className="flex sm:flex-row flex-col min-h-screen  bg-white">
      {/* Product image placeholder */}
      <div className="w-1/2 h-80 bg-gray-200 rounded-md animate-pulse"></div>
      {/* Title placeholder */}
      <div className="w-1/2 mx-2 flex flex-col">
        <div className=" w-full h-8 bg-gray-200 rounded-md animate-pulse"></div>
        {/* Description placeholder */}
        <div className="mt-4 w-full h-16 bg-gray-200 rounded-md animate-pulse"></div>
        {/* Price placeholder */}
        <div className="mt-4 flex items-center w-full h-8 bg-gray-200 rounded-md animate-pulse">
          <span className="w-full h-full bg-gray-300 rounded-md animate-pulse"></span>
        </div>
        {/* Stock status placeholder */}
        <div className="mt-4 w-full h-8 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="mt-4 w-full h-8 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="mt-4 w-full h-8 bg-gray-200 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
