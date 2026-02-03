import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AuthCallback from "./features/login/AuthCallback";
import GoogleCallback from "./features/login/GoogleCallback";

function App() {
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route
            path="/api/auth/google/callback"
            element={<GoogleCallback />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
