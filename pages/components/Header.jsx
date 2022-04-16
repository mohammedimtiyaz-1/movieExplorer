import React from "react";
import { useRouter } from "next/router";

import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcony,
  UserIcon,
  ColorSwatchIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import HeaderItems from "./HeaderItems";

function Header() {
  const router = useRouter();
  return (
    <header className="flex flex-col sm:flex-row mx-5 my-3 justify-between items-center h-auto">
      <div className="flex justify-evenly flex-grow max-w-lg">
        <HeaderItems link="/" title="HOME" Icon={HomeIcon} />
        <HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItems title="CERTIFICATIONS" Icon={BadgeCheckIcon} />
        <HeaderItems
          link="COLLECTIONS"
          title="COLLECTIONS"
          Icon={CollectionIcon}
        />
        <HeaderItems title="SEARCH" Icon={SearchIcon} />
        <HeaderItems title="ACCOUNT" Icon={UserIcon} />
      </div>
      {/* <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="alt"
      /> */}
      <p className="uppercase text-6xl font-mono font-extrabold">Que T</p>
    </header>
  );
}

export default Header;
