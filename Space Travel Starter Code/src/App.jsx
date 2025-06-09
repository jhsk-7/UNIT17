import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import styles from "./App.module.css";

// Pages
import HomePage from "./Components/HomePage";
import Spacecrafts from "./Components/Spacecrafts";
import Planets from "./Components/Planets";

// Layouts
import RootLayout from "./Components/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="spacecrafts" element={<Spacecrafts />} />
      <Route path="planets" element={<Planets />} />
      <Route path="*" element={<HomePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
