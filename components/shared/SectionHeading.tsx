type Props = {
  title: string;
  subtitle: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16 text-center">
      <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
        {subtitle}
      </p>

      <h2 className="mt-3 text-5xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
}