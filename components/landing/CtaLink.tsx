import Link from "next/link";

type CtaLinkProps = {
  href: string;
  label: string;
  variant?: "ghost" | "primary";
};

const variantStyles = {
  primary:
    "border border-[#6f90d6] bg-[#1e4fa6] text-white hover:bg-[#295fc2] focus-visible:outline-[#173c80]",
  ghost:
    "border border-[#111111] bg-white text-[#111111] hover:border-[#1e4fa6] hover:bg-[#f4f8ff] hover:text-[#1e4fa6] focus-visible:outline-[#173c80]",
} as const;

export function CtaLink({ href, label, variant = "primary" }: CtaLinkProps) {
  const className = `inline-flex h-12 items-center justify-center px-6 font-display text-sm font-bold uppercase tracking-[0.08em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles[variant]}`;
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isExternal) {
    const shouldOpenInNewTab = href.startsWith("http://") || href.startsWith("https://");

    return (
      <a
        href={href}
        className={className}
        target={shouldOpenInNewTab ? "_blank" : undefined}
        rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
