import "./LoginList.css";
import KakaoLoginButton from "../../components/login/KakaoLoginButton";
import GoogleLoginButton from "../../components/login/GoogleLoginButton";
import NaverLoginButton from "../../components/login/NaverLoginButton";
import { useNavigate } from "react-router-dom";

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

  const onClickNaverLogin = () => {
    const CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_NAVER_REDIRECT_URI;
    const NAVER_AUTH_URI = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=naver_login`;
    window.location.href = NAVER_AUTH_URI;
  };

  const navigate = useNavigate();

  const onClickJoin = () => {
    navigate("/join");
  };

  return (
    <div className="login-list">
      <div className="id-login-wrap">
        <div>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
        </div>

        <div className="find-wrap">
          <div className="blank"></div>
          <span>아이디 찾기</span>
          <span>|</span>
          <span>비밀번호 찾기</span>
        </div>

        <div className="button-wrap">
          <button type="button" className="login">
            일반 로그인
          </button>
          <button type="button" className="join" onClick={onClickJoin}>
            일반 회원가입
          </button>
        </div>
      </div>

      <div className="social-login-wrap">
        <div className="social-login-title">
          <div></div>
          <span>간편 로그인 / 회원 가입</span>
          <div></div>
        </div>

        <KakaoLoginButton onClick={onClickKakaoLogin} />
        <NaverLoginButton onClick={onClickNaverLogin} />
        <GoogleLoginButton onClick={onClickGoogleLogin} />
      </div>
    </div>
  );
};

export default LoginList;
