import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// naver, kakao 공통 처리
function AuthCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      // 토큰을 localStorage에 저장
      localStorage.setItem("token", token);

      // 메인 페이지로 이동
      navigate("/");
    } else {
      // 에러 처리
      navigate("/login");
    }
  }, [searchParams, navigate]);

  return (
    <div>
      <p>Kakao 로그인 처리중...</p>
    </div>
  );
}

export default AuthCallback;
