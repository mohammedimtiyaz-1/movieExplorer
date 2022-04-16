import React from "react";

function HeaderItems({ Icon, title }) {
  return (
    <div className="group flex w-12 flex-col items-center cursor-pointer sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className=" opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItems;
