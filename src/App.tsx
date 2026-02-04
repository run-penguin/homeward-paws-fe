import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AuthCallback from "./features/login/AuthCallback";
import GoogleCallback from "./features/login/GoogleCallback";
import Join from "./pages/Join";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <div className="wrapper">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route
            path="/api/auth/google/callback"
            element={<GoogleCallback />}
          />
          <Route path="*" element={<NotFound />} />

          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/join" element={<Join />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
