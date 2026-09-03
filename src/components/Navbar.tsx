import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="เมนูหลัก">
      <ul className="navList" style={{ display: 'flex', gap: '20px', listStyle: 'none', justifyContent: 'center' }}>
        <li>
          <Link className="navLink" href="/bodyslam">Bodyslam</Link>
        </li>
        <li>
          <Link className="navLink" href="/labanoon">Labanoon</Link>
        </li>
        <li>
          <Link className="navLink" href="/seasonfive">Season Five</Link>
        </li>
      </ul>
    </nav>
  );
}