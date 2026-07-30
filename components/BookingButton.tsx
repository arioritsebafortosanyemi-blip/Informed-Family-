import Link from "next/link";

type BookingButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  size?: "default" | "cta";
  className?: string;
};

const VARIANT_STYLES: Record<NonNullable<BookingButtonProps["variant"]>, string> = {
  solid: "border-transparent bg-green-dark text-cream-light",
  outline: "border-green-dark bg-transparent text-green-dark",
};

const SIZE_STYLES: Record<NonNullable<BookingButtonProps["size"]>, string> = {
  default: "text-base sm:text-xl lg:text-2xl",
  cta: "text-xl lg:text-2xl",
};

export default function BookingButton({
  children,
  variant = "solid",
  size = "default",
  className = "",
}: BookingButtonProps) {
  return (
    <Link
      href="#booking"
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-button border-2 px-[18.667px] py-[12.667px] font-bold tracking-[-0.035px] transition-opacity hover:opacity-90 ${SIZE_STYLES[size]} ${VARIANT_STYLES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
