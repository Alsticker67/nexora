type BadgeProps = {
  text: string;
};

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
      {text}
    </span>
  );
}