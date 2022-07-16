import React from "react";

const Loading = () => {
  return (
    <div class="flex items-center justify-center">
        <div>
        <div class="w-24 h-24 border-l-2 border-gray-500 rounded-full animate-spin"></div>
      <h6 className="text-gray-500 mt-2">Please Wait ...</h6>
        </div>
    </div>

  );
};

export default Loading;
