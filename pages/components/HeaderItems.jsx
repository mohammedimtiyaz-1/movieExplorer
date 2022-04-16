import React from "react";
import { useRouter } from "next/router";

function HeaderItems({ Icon, title, link }) {
  const router = useRouter();

  return (
    <div
      className="group flex w-12 flex-col items-center cursor-pointer sm:w-20 hover:text-white"
      onClick={() => {
        router.push(title.toLowerCase());
      }}
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className=" opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItems;
