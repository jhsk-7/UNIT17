import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./RootLayout.module.css";
import Loading from "./Loading";

function RootLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1 sec
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="spacecrafts">Spacecrafts</NavLink>
          <NavLink to="planets">Planets</NavLink>
          <h1>Space Travel</h1>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
