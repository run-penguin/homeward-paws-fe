import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get("access_token");

    if (accessToken) {
      // 백엔드로 토큰 전송하여 JWT 받기
      fetch("http://localhost:8081/api/auth/google/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken }),
      })
        .then((res) => res.json())
        .then((data) => {
          // JWT 토큰 저장
          localStorage.setItem("token", data.token);
          navigate("/");
        })
        .catch((err) => {
          console.error("Google login error:", err);
          alert("로그인에 실패했습니다.");
          navigate("/login");
        });
    } else {
      alert("Google 로그인에 실패했습니다.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <p>Google 로그인 처리 중...</p>
    </div>
  );
};

export default GoogleCallback;
