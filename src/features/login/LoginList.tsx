import "./LoginList.css";
import KakaoLoginButton from "../../components/login/KakaoLoginButton";
import GoogleLoginButton from "../../components/login/GoogleLoginButton";

const LoginList = () => {
  const onClickKakaoLogin = () => {
    const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = KAKAO_AUTH_URI;
  };

  const onClickGoogleLogin = () => {
    const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
    const GOOGLE_AUTH_URI = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
    window.location.href = GOOGLE_AUTH_URI;
  };

  return (
    <div className="login-list">
      <div className="id-login-wrap">
        <div>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
        </div>

        <button type="button">로그인</button>
      </div>

      <KakaoLoginButton onClick={onClickKakaoLogin} />

      <button type="button">네이버로 로그인</button>

      <GoogleLoginButton onClick={onClickGoogleLogin} />
    </div>
  );
};

export default LoginList;
