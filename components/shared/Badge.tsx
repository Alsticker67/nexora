type BadgeProps = {
  text: string;
};

export default function Badge({ text }: BadgeProps) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-emerald-400/30
        bg-zinc-900/80
        px-5
        py-2.5
        text-sm
        font-medium
        tracking-wide
        text-emerald-300
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-emerald-400
        hover:bg-emerald-500/10
        hover:text-zinc-50
        hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]
      "
    >
      {text}
    </span>
  );
}