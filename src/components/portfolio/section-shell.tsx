import { cn } from "@/lib/utils";

export function SectionShell({
  id,
  title,
  subtitle,
  className,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8", className)}>
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.18em] text-[#B08968]">{title}</p>
        {subtitle ? <h2 className="max-w-3xl text-3xl font-semibold text-[#2B2B2B] sm:text-4xl">{subtitle}</h2> : null}
      </div>
      {children}
    </section>
  );
}
