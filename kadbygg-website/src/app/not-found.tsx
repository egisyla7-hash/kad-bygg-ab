import Link from "next/link";
import { IconArrow } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="grid min-h-[70svh] place-items-center bg-forest-900 px-6 text-center text-white">
      <div>
        <p className="font-display text-7xl font-bold text-amber-400">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
          Sidan kunde inte hittas
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          Sidan du letar efter finns inte eller har flyttats. Gå tillbaka till
          startsidan så hjälper vi dig vidare.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Till startsidan
          <IconArrow className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
