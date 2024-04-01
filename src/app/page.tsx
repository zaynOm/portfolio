import Link from "next/link";

export default function Home() {
  return (
    <>
    <header>
      <nav>
        <menu className="mt-5 flex gap-16 justify-center font-bold">
          <Link href='/'><li>Home</li></Link>
          <Link href='#about'><li>About</li></Link>
          <Link href='#projects'><li>Projects</li></Link>
          <Link href='#contact'><li>Contact</li></Link>
        </menu>
      </nav>
    </header>
    <main>

    <div>Omar</div>
    </main>
    </>
  );
}
