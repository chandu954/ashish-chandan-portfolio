export default function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="font-mono text-sm text-accent">
        <span className="text-faint">{"//"}</span> {index}
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-muted leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}