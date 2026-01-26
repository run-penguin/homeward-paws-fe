import "./LoginList.css";
import kakaoButton from "../../assets/kakao_login_medium_narrow.png";

const LoginList = () => {
  const onClickKakaoLogin = () => {
    const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div className="login-list">
      <button type="button" onClick={onClickKakaoLogin} className="kakao-login">
        <img src={kakaoButton} />
      </button>
      <button type="button">네이버로 로그인</button>
      <button type="button">구글로 로그인</button>
    </div>
  );
};

export default LoginList;
