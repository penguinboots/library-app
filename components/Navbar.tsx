"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import localFont from "next/font/local";
import { BookCopy, Home, Search } from "lucide-react";
import MobileNavbar from "./MobileNavbar";

const quicksand = Quicksand({
  weight: "600",
  subsets: ["latin"],
});

const borel = localFont({
  src: [{ path: "../public/fonts/Borel-Regular.ttf" }],
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

export const Navbar = () => {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/home" className="flex items-center">
        <div className="relative h-12 w-12">
          <Image src="/logo.svg" alt="Logo" fill />
        </div>
        <h1
          className={cn(
            "text-3xl font-bold text-pink-300 pt-6",
            borel.className
          )}
        >
          Genki&apos;s
        </h1>
      </Link>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
      <div className="hidden md:flex items-center gap-x-4">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className="text-md flex p-3 items-center justify-center cursor-pointer
             text-pink-400 hover:text-pink-500 hover:bg-pink-500/10
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
    </nav>
  );
};
