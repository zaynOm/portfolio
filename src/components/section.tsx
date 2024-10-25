import { PropsWithChildren } from "react";

export default function Section({ children }: PropsWithChildren) {
  return (
    <section className="flex justify-center min-h-screen mx-auto p-14 pt-52 max-w-7xl">
      {children}
    </section>
  );
}
