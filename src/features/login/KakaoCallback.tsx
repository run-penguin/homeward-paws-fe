import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function KakaoCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      // 토큰을 localStorage에 저장
      localStorage.setItem("accessToken", token);

      // 메인 페이지로 이동
      navigate("/");
    } else {
      // 에러 처리
      navigate("/login");
    }
  }, [searchParams, navigate]);

  return (
    <div>
      <p>로그인 처리중...</p>
    </div>
  );
}

export default KakaoCallback;
