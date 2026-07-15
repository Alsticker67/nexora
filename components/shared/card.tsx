import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-xl transition hover:border-cyan-500">
      {children}
    </div>
  );
}