import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import Layout from "./Layout";

import About from "./pages/About";
import Contact from "./pages/Contact-us";
import Home from "./pages/Home";

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

export { routers };
