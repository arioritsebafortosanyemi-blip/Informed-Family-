import Link from "next/link";
import Image from "next/image";

const NAV_COLUMNS = [
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Booking", href: "#booking" },
];

const SOCIAL_LINKS = ["Instagram", "Facebook", "Twitter", "Linkedin"];

export default function Footer() {
  return (
    <footer className="border-t-[0.667px] border-border bg-cream">
      <div className="flex flex-col gap-12 px-6 py-12 sm:px-12 lg:flex-row lg:px-[34px] lg:py-[61px]">
        <div className="flex flex-col gap-6 lg:max-w-[460px]">
          <Image
            src="/images/logo-transparent.png"
            alt="The Informed Family Builder Hub"
            width={220}
            height={80}
            className="h-[64px] w-auto object-contain lg:h-[80px]"
          />
          <span className="text-[14px] font-normal leading-[25px] text-black">
            Stay up to date
          </span>
          <p className="text-[14px] font-normal leading-[19px] text-black">
            Subscribe to receive communications about our latest products,
            discount offerings and stories.
          </p>
          <form className="flex h-[38px] items-center justify-between rounded-button border border-border px-3">
            <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              className="h-full w-full bg-transparent text-[14px] font-normal leading-[19px] text-black outline-none placeholder:text-muted"
            />
            <button
              type="submit"
              className="shrink-0 text-[14px] font-bold leading-[19px] text-black"
            >
              Subscribe
            </button>
          </form>
        </div>

        <nav className="flex flex-1 flex-wrap gap-10 lg:justify-end lg:gap-[28px] lg:pl-[151px]">
          {NAV_COLUMNS.map((col) => (
            <Link
              key={col.href}
              href={col.href}
              className="text-[14px] font-normal leading-[25px] text-black"
            >
              {col.title}
            </Link>
          ))}

          <div className="flex flex-col gap-1">
            <span className="text-[14px] font-normal leading-[25px] text-black">
              Social
            </span>
            <ul className="flex flex-col gap-1">
              {SOCIAL_LINKS.map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-[14px] font-normal leading-[25px] text-black"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="border-t-[0.667px] border-border px-6 py-5 sm:px-12 lg:px-[34px]">
        <p className="text-[13px] font-normal leading-[19px] text-muted">
          This site does not provide emergency mental health services. If you
          are in crisis, please contact your local emergency services or a
          crisis helpline immediately.
        </p>
      </div>

      <div className="flex flex-col gap-4 border-t-[0.667px] border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-[34px]">
        <span className="text-[14px] font-normal leading-[19px] text-black">
          © The Informed Family Builder 2026
        </span>
        <div className="flex items-center gap-[10px] text-[14px] font-normal leading-[19px] text-black">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
