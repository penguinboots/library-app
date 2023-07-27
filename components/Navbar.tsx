"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import localFont from "next/font/local";

const quicksand = Quicksand({
  weight: "600",
  subsets: ["latin"],
});

const borel = localFont({
  src: [
    {path: '../public/fonts/Borel-Regular.ttf'}
  ]
})

export const Navbar = () => {
  return (
    <nav className="p-4 bg-pink-300 flex items-center justify-between">
      <Link href="/home" className="flex items-center">
        <div className="relative h-12 w-12">
          <Image src="/logo.svg" alt="Logo" fill />
        </div>
        <h1 className={cn("text-3xl font-bold text-white pt-6", borel.className)}>
          Genki&apos;s
        </h1>
      </Link>
      <NavigationMenu className={cn("", quicksand.className)}>
        <NavigationMenuList className="flex items-center gap-x-2">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              SEARCH
            </NavigationMenuLink>
          </Link>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              SHELF
            </NavigationMenuLink>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
