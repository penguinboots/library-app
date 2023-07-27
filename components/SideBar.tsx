"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { BookCopy, Home, Search } from "lucide-react";

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/home",
  },
  {
    label: "Search",
    icon: Search,
    href: "/search",
  },
  {
    label: "My Shelf",
    icon: BookCopy,
    href: "/shelf",
  },
];

const SideBar = () => {
  return (
    <div className="flex flex-col space-y-4 py-4 h-full bg-pink-900 text-white">
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className="text-md flex p-3 items-center justify-center cursor-pointer
              hover:text-pink-100 hover:bg-white/10
              rounded-lg transition"
        >
          <div className="flex items-center flex-1">
            <route.icon className="h-6 w-6 mr-3" />
            {route.label}
          </div>
        </Link>
      ))}
      <UserButton />
    </div>
  );
};

export default SideBar;
