import React from "react";
import { useRouter } from "next/router";

const HeaderItems = ({ Icon, title, menu, setMenu }) => {
  const router = useRouter();

  return (
    <div
      className={`flex flex-col items-center w-12 ${
        menu ? "text-green-600" : ""
      } cursor-pointer group sm:w-20 hover:text-white`}
      onClick={() => {
        setMenu(title === "HOME" ? "/" : title?.toLowerCase());
        router.push(title === "HOME" ? "/" : "/" + title?.toLowerCase());
      }}
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p
        className={` ${
          menu ? "opacity-100" : "opacity-0"
        } tracking-widest group-hover:opacity-100`}
      >
        {title && title}
      </p>
    </div>
  );
};

export default HeaderItems;
