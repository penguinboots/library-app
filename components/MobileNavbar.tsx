"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import SideBar from "./SideBar";
import { Menu } from "lucide-react";

const MobileNavbar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <div className="h-10 w-10 rounded-lg bg-pink-50 flex items-center justify-center text-pink-300">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
