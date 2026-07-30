type TagPillProps = {
  children: React.ReactNode;
  variant?: "lime" | "pale-green";
};

export default function TagPill({ children, variant = "lime" }: TagPillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-[8.004px] py-[6px] text-[12px] font-normal leading-[12px] text-green-dark ${
        variant === "lime" ? "bg-lime" : "bg-pale-green"
      }`}
    >
      {children}
    </span>
  );
}
