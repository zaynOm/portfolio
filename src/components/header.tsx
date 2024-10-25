import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <menu className="mt-5 flex gap-16 justify-center font-bold">
            <Link href="/">
              <li className="header-link">Home</li>
            </Link>
            <Link href="/motion">
              <li className="header-link">Motion</li>
            </Link>
            <Link href="/about">
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
      </div>
    </header>
  );
}
