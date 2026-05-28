"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  isOpen: boolean;
}

export default function Navbar({
  isOpen,
}: Props) {
  const pathname = usePathname();

  return (
    <nav
      className={`
        flex p-4 gap-3 rounded-sm glass text-blue-800
        transition-all duration-300 ease-in-out
        transform

        ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }
      `}
    >
      <Link
        href="/"
        className={`
          transition-all duration-400 ease-in-out

            ${
              pathname === "/"
                ? "btn btn-gradient btn-accent text-white"
                : "btn glass"
            }
          `
        }
      >
        HOME
      </Link>
      <Link
        href="/about"
        className={`
          transition-all duration-400 ease-in-out

            ${
              pathname === "/about"
                ? "btn btn-gradient btn-accent text-white"
                : "btn glass"
            }
          `
        }
      >
        SOBRE
      </Link>
    </nav>
  );
}
