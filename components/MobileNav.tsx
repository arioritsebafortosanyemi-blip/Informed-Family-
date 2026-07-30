"use client";

import { useState } from "react";
import Link from "next/link";
import BookingButton from "./BookingButton";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Booking", href: "#booking" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
      >
        <span className="h-[2px] w-6 bg-green-darker" />
        <span className="h-[2px] w-6 bg-green-darker" />
        <span className="h-[2px] w-6 bg-green-darker" />
      </button>

      {open && (
        <nav className="absolute left-0 right-0 top-full z-20 flex flex-col items-center gap-4 bg-cream px-6 py-6 shadow-md">
          <ul className="flex flex-col items-center gap-4 text-[14px] font-normal leading-[19px] text-green-darker">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <BookingButton>Book Consultation</BookingButton>
        </nav>
      )}
    </div>
  );
}
