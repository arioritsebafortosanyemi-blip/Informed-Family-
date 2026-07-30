import Link from "next/link";
import Image from "next/image";
import BookingButton from "./BookingButton";
import MobileNav from "./MobileNav";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Booking", href: "#booking" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between px-3 py-3 sm:justify-center sm:gap-[60px] sm:px-12 sm:py-6 lg:gap-[353px] lg:px-[46px] lg:py-[15px]">
      <Link href="/" className="shrink-0">
        <Image
          src="/images/logo-transparent.png"
          alt="The Informed Family Builder Hub"
          width={220}
          height={80}
          className="h-[64px] w-auto object-contain lg:h-[80px]"
          priority
        />
      </Link>

      <nav className="hidden sm:block">
        <ul className="flex flex-wrap items-center justify-center gap-4 text-[14px] font-normal leading-[19px] text-green-darker">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="p-[10px]">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden sm:block">
        <BookingButton>Book Consultation</BookingButton>
      </div>

      <MobileNav />
    </header>
  );
}
