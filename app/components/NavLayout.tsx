"use client";

import { useState } from "react";

import Navbar from "./Navbar";
import NavToggle from "./NavToggle";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <NavToggle
        isOpen={isOpen}
        toggle={() => setIsOpen(!isOpen)}
      />

      <div className="w-full max-w-2xl min-h-[500px] flex flex-col gap-5 mx-auto">
        <Navbar isOpen={isOpen} />
        {children}
      </div>
    </>
  );
}
