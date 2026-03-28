import Link from "next/link";

type CtaLinkProps = {
  href: string;
  label: string;
  variant?: "ghost" | "primary";
};

const variantStyles = {
  primary:
    "border border-[#79a4ff] bg-[#5f8fff] text-white hover:bg-[#6f99ff] focus-visible:outline-[#9bbcff]",
  ghost:
    "border border-[#757575] bg-[#101010] text-white hover:border-[#9bbcff] hover:bg-[#1a1a1a] focus-visible:outline-[#9bbcff]",
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
