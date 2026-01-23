import LoginList from "../features/login/LoginList";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
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
