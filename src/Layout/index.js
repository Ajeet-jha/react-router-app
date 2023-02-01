import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/about`}>About</Link>
        </li>
        <li>
          <Link to={`/contact`}>Contact</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Layout;
