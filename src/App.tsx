import "./App.css";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <>
        <p>Test</p>
      </>
    </AuthProvider>
  );
}

export default App;
