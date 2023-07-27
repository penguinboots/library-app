"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Comfortaa } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Comfortaa({
  weight: "600",
  subsets: ["latin"],
});

export const Navbar = () => {
  return (
    <nav className="p-4 bg-pink-300 flex items-center justify-between">
      <Link href="/home" className="flex items-center">
        <div className="relative h-12 w-12">
          <Image src="/logo.svg" alt="Logo" fill/>
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Genki&apos;s
        </h1>
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-x-2">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Search Books
            </NavigationMenuLink>
          </Link>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              My Shelf
            </NavigationMenuLink>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
