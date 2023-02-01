import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";

export default function App() {
  return (
    <div className="App">
      <h1>CodeSandbox react-router-dom: "6.8.0" </h1>
      <RouterProvider router={routers} />
    </div>
  );
}
