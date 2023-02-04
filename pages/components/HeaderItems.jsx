import React from "react";
import { useRouter } from "next/router";

const HeaderItems = ({ Icon, title, menu, setMenu, children }) => {
  const router = useRouter();

  return (
    <div
      className={`flex flex-col items-center w-12 ${
        menu ? "text-green-600" : ""
      } cursor-pointer group sm:w-20 hover:text-white`}
      onClick={() => {
        const r = title === "HOME" ? "/" : title?.toLowerCase();
        setMenu(r);
        router.push(r);
      }}
    >
      <div className="h-8 mb-1 group-hover:animate-bounce">{children}</div>
      <p
        className={` ${
          true ? "opacity-100" : "opacity-0"
        } tracking-widest group-hover:opacity-100`}
      >
        {(title && title) || ""}
      </p>
    </div>
  );
};

export default HeaderItems;
