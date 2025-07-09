import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthProvider from "./providers/AuthProvider";
import { router } from "./router";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
