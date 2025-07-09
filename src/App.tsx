import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthProvider from "./providers/AuthProvider";
import { router } from "./router";
import StoreProvider from "./providers/StoreProvider";

function App() {
  return (
    <AuthProvider>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </AuthProvider>
  );
}

export default App;
