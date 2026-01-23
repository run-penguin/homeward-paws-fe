import "./LoginList.css";

const LoginList = () => {
  return (
    <div className="login-list">
      <div className="general-wrap">
        <label className="title">Login</label>

        <div className="login-id">
          <label></label>
          <input type="text" placeholder="ID" />
        </div>
        <div className="login-pw">
          <label></label>
          <input type="password" placeholder="Password" />
        </div>

        <button type="button">로그인</button>
      </div>

      <div className="divide">
        <label>OR</label>
      </div>

      <button type="button">카카오톡</button>
      <button type="button">네이버</button>
      <button type="button">구글</button>
    </div>
  );
};

export default LoginList;
