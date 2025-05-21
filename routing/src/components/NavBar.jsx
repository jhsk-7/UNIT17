import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ data }) {
  return (
    <nav className="container">
      <Link to="/" className="link">
        Home
      </Link>
      {data.map((dataElement) => (
        <Link key={dataElement.id} to={`/content/${dataElement.id}`}>
          {dataElement.title}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
