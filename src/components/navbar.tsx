"use client";
import { NavItems } from "../../constant";
import Link from "next/link";
import { BriefcaseBusiness, CircleUserRound, Menu, Search } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";
import { useEffect, useState } from "react";

const Navbar = ({ toggleSidebar, cartItems }: { toggleSidebar: () => void, cartItems: [] }) => {

  return (
    <div className="flex justify-between items-center p-5">
      <div className="flex items-center gap-5">
        <h2 className="font-extrabold text-3xl">Jolt</h2>
        <div className="md:flex items-center gap-5 capitalize hidden">
          {NavItems.map(
            (item: { name: string; url: string; active?: boolean }) => {
              return (
                <Link
                  href={item?.url}
                  key={item?.name}
                  className={` text-lg ${
                    item?.active ? "text-black font-bold" : "text-[#b8b6b6]"
                  }`}
                >
                  {item?.name}
                </Link>
              );
            }
          )}
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button className="flex items-center gap-3 font-bold">
          <Search />
          <p className="hidden md:block">Search</p>
        </button>
        <button className="flex items-center gap-3 font-bold">
          <BriefcaseBusiness />
          <p className="hidden md:block">Cart</p>
          <p aria-label="cartItem">{cartItems.length}</p>
        </button>
        <Link
          href={"/auth/login"}
          className="md:flex items-center gap-3 font-bold hidden"
        >
          <CircleUserRound />
          Login
        </Link>
        <button onClick={toggleSidebar} aria-label="menu">
          <Menu className="md:hidden cursor-pointer" />
        </button>
      </div>

      {/* <MobileSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} /> */}
    </div>
  );
};

export default Navbar;
