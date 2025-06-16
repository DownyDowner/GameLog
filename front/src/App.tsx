import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./router/Routes";
import { AuthProvider } from "./context/AuthContext";

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
