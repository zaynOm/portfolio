import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <menu className="mt-5 flex gap-16 justify-center font-bold">
            <Link href="motion">
              <li className="header-link">Home</li>
            </Link>
            <Link href="#about">
              <li className="header-link">About</li>
            </Link>
            <Link href="#projects">
              <li className="header-link">Projects</li>
            </Link>
            <Link href="#contact">
              <li className="header-link">Contact</li>
            </Link>
          </menu>
        </nav>
      </header>

      <main className="mx-52">
        <section className="min-h-full mt-56">
          <div>
            <h1 className="text-8xl font-bold">Hi! I'm Omar Ouaziz</h1>
            <span className="text-4xl font-bold text-yellow-200">
              A Passionate Software Engineer
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
