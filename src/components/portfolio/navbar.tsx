"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#B08968]/15 bg-[#F5EFE6]/85 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="text-sm font-semibold tracking-[0.16em] text-[#2B2B2B]">
          PILLYI G SHANKAR
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[#2B2B2B]/80 transition-colors hover:text-[#2B2B2B]">
              {item.label}
            </a>
          ))}
        </div>

        <button
          aria-label="Toggle navigation menu"
          className="rounded-full p-2 text-[#2B2B2B] md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[#B08968]/15 px-4 py-4 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="text-sm text-[#2B2B2B]/80"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
