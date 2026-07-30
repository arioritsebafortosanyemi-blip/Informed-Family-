import Link from "next/link";

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-cream px-6 py-16 sm:px-12 lg:px-[34px]">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-[14px] font-normal leading-[19px] text-green-dark"
        >
          ← Back to home
        </Link>

        <h1 className="mt-8 text-[30px] font-semibold leading-[1.2] text-green-darker lg:text-[34px]">
          {title}
        </h1>
        <p className="mt-2 text-[13px] font-normal leading-[19px] text-muted">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-10 flex flex-col gap-8 text-[14px] font-normal leading-[21px] text-body-dark">
          {children}
        </div>
      </div>
    </main>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-[18px] font-semibold leading-[1.3] text-green-dark">
        {heading}
      </h2>
      {children}
    </section>
  );
}
