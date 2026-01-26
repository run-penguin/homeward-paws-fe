import "./LoginList.css";

const LoginList = () => {
  return (
    <div className="login-list">
      <button type="button">카카오톡으로 로그인</button>
      <button type="button">네이버로 로그인</button>
      <button type="button">구글로 로그인</button>
    </div>
  );
};

export default LoginList;
