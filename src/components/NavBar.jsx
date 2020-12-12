import Link from "next/link";
import { useRouter } from "next/router";

const LINKS = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Ejemplos",
    path: "/ejemplos",
  },
];

const NavBar = () => {
  const router = useRouter();

  return (
    <header>
      <div className="navbar__content">
        <div className="brand">
          <img src="/images/logo.png" alt="osm-py-logo" />
          OSM Paraguay
        </div>
        <label htmlFor="menu-toggle-checkbox" className="menu-toggle">
          <img src="/images/menu.svg" alt="menu-icon" />
        </label>
        <input type="checkbox" id="menu-toggle-checkbox" />
        <nav>
          {LINKS.map((link) => (
            <Link href={link.path}>
              <a className={router.pathname === link.path ? "selected" : ""}>
                {link.title}
              </a>
            </Link>
          ))}
          <a href="https://osmparaguay.org/blog/">Blog</a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
