import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-xl transition hover:border-sky-500">
      {children}
    </div>
  );
}