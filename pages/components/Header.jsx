import React from "react";

import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import HeaderItems from "./HeaderItems";
import { useState } from "react";

function Header() {
  const [menu, setMenu] = useState("/");
  return (
    <header className="flex flex-col items-center justify-between h-auto mx-5 my-3 sm:flex-row">
      <div className="flex items-center flex-grow w-full md:max-w-lg justify-evenly">
        <HeaderItems
          title="HOME"
          Icon={HomeIcon}
          menu={menu === "/"}
          setMenu={setMenu}
        >
          <HomeIcon />
        </HeaderItems>
        <HeaderItems
          title="TRENDING"
          Icon={LightningBoltIcon}
          menu={menu === "trending"}
          setMenu={setMenu}
        >
          <LightningBoltIcon />
        </HeaderItems>

        <HeaderItems
          title="TOP"
          Icon={CollectionIcon}
          menu={menu === "top"}
          setMenu={setMenu}
        >
          <CollectionIcon />
        </HeaderItems>
        <HeaderItems
          title="CERTIFICATIONS"
          Icon={BadgeCheckIcon}
          menu={menu === "certifications"}
          setMenu={setMenu}
        >
          <BadgeCheckIcon />
        </HeaderItems>
      </div>

      <p className="hidden font-mono text-6xl font-extrabold uppercase md:block">
        Movie Gyan
      </p>
    </header>
  );
}

export default Header;
