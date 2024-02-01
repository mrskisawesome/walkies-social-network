import Link from "next/link";

export default function Header() {
  return (
    <div>
      <h2>Walkies</h2>
      <nav className="main_nav">
        <Link href={"/"}>home</Link>
      </nav>
    </div>
  );
}
