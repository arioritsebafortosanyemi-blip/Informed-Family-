type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
};

export default function SectionHeading({
  children,
  className = "",
  light = false,
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-[26px] font-semibold leading-[1.15] tracking-[-0.75px] sm:text-[30px] lg:text-[34px] lg:leading-[38px] ${
        light ? "text-cream" : "text-green-dark"
      } ${className}`}
    >
      {children}
    </h2>
  );
}
