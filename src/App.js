import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <RouterProvider router={routers} />
    </div>
  );
}
