type SectionHeadingProps = {
  align?: "center" | "left";
  description: string;
  eyebrow: string;
  title: string;
};

const alignClassMap = {
  left: "items-start text-left",
  center: "items-center text-center",
} as const;

export function SectionHeading({
  align = "left",
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <header className={`flex max-w-5xl flex-col gap-3 ${alignClassMap[align]}`}>
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#ababab]">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
        {title}
      </h2>
      <span className="mt-1 h-1 w-24 bg-[#84adff]" aria-hidden />
      <p className="max-w-3xl text-sm leading-relaxed text-[#ababab] sm:text-base">
        {description}
      </p>
    </header>
  );
}
