import LoginList from "../features/login/LoginList";
import "./Login.css";
import logo from "../assets/logo-text.png";

const Login = () => {
  return (
    <div className="login-page">
      <div className="logo-wrap">
        <img src={logo} alt="Logo" />
      </div>

      <div className="login-img-wrap">
        <img src="/src/assets/hp-login.png" />
      </div>

      <div>
        <LoginList />
      </div>
    </div>
  );
};

export default Login;
