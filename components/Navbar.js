import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="menu-bar">
<li>
            <Link href="/blog">
              <a> blog </a>
            </Link>
          </li>
      
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
