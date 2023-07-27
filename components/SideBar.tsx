"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { BookCopy, Home, Search } from "lucide-react";
import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";

const quicksand = Quicksand({
  weight: "700",
  subsets: ["latin"],
});

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
    <div className="flex flex-col justify-between p-6 pt-20 h-full bg-pink-900 text-white">
      <div className="space-y-4">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className="text-md flex p-3 items-center justify-center cursor-pointer
              hover:text-pink-100 hover:bg-white/10
              rounded-lg transition"
          >
            <div
              className={cn("flex items-center flex-1", quicksand.className)}
            >
              <route.icon className="h-6 w-6 mr-3" />
              {route.label}
            </div>
          </Link>
        ))}
      </div>
      <div className="p-4">
        <UserButton />
      </div>
    </div>
  );
};

export default SideBar;
