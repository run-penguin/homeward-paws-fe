import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/api.ts";

interface SignupForm {
  email: string;
  emailDomain: string;
  id: string;
  password: string;
  passwordConfirm: string;
  agreeAll: boolean;
  agreeAge: boolean;
  agreeTerms: boolean;
}

type FormErrors = {
  [K in keyof SignupForm]?: string;
};

export const useSignupForm = () => {
  const [formData, setFormData] = useState<SignupForm>({
    email: "",
    emailDomain: "naver.com",
    id: "",
    password: "",
    passwordConfirm: "",
    agreeAll: false,
    agreeAge: false,
    agreeTerms: false,
  });

  const [emailCheck, setEmailCheck] = useState<{
    status: "idle" | "checking" | "available" | "taken" | "sent" | "verified";
    message: string;
  }>({ status: "idle", message: "" });

  const [errors, setErrors] = useState<FormErrors>({});

  // 값이 변경될 때
  const onChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      if (name === "agreeAll") {
        // 전체 동의
        setFormData({
          ...formData,
          agreeAll: checked,
          agreeAge: checked,
          agreeTerms: checked,
        });
      } else {
        // 전체 동의 외
        const newFormData = { ...formData, [name]: checked };
        newFormData.agreeAll = newFormData.agreeAge && newFormData.agreeTerms;
        setFormData(newFormData);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // 이메일 중복 체크
  const checkEmail = async (fullEmail: string) => {
    try {
      setEmailCheck({ status: "checking", message: "" });
      const res = await axios.get(`${API_URL}/api/join/email`, {
        params: {
          email: fullEmail,
        },
      });

      setEmailCheck({
        status: res.data.data ? "available" : "taken",
        message: res.data.message,
      });
    } catch (error) {
      console.error("이메일 체크 에러:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  // 이메일 변경 감지
  useEffect(() => {
    const checkEmailDebounced = setTimeout(async () => {
      if (formData.email && formData.emailDomain) {
        const fullEmail = `${formData.email}@${formData.emailDomain}`;
        await checkEmail(fullEmail);
      }
    }, 500); // 500ms 후에 실행 (debounce)

    return () => clearTimeout(checkEmailDebounced);
  }, [formData.email, formData.emailDomain]);

  // 유효성 검사
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // 이메일
    if (!formData.email) newErrors.email = "필수 입력 항목입니다.";

    // 아이디
    if (!formData.id) {
      newErrors.id = "필수 입력 항목입니다.";
    } else if (formData.id.length < 4) {
      newErrors.id = "4글자 이상 입력해 주세요.";
    }

    // 비밀번호
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!formData.password) {
      newErrors.password = "필수 입력 항목입니다.";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = "영문, 숫자를 포함한 8자 이상이어야 합니다.";
    }

    // 비밀번호 확인
    if (!formData.passwordConfirm) {
      newErrors.passwordConfirm = "확인을 위해 비밀번호를 다시 입력해 주세요.";
    } else if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
    }

    // 약관 동의
    if (!formData.agreeAge || !formData.agreeTerms) {
      newErrors.agreeAll = "약관에 동의해 주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 인증 메일 발송
  const handleEmailVerify = async () => {
    if (emailCheck.status !== "available") return;

    try {
      const fullEmail = `${formData.email}@${formData.emailDomain}`;

      const res = await axios.post(`${API_URL}/api/join/email/send`, {
        email: fullEmail,
      });

      setEmailCheck({ status: "sent", message: res.data.message });
    } catch (error) {
      console.error("이메일 인증하기 에러:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  // 인증 메일 완료
  const handleEmailVerified = async () => {
    try {
      const fullEmail = `${formData.email}@${formData.emailDomain}`;

      const res = await axios.get(`${API_URL}/api/join/email/verified`, {
        params: {
          email: fullEmail,
        },
      });

      setEmailCheck({ status: "verified", message: res.data.data });
    } catch (error) {
      console.error("이메일 인증하기 에러:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      //   const response = await fetch("/api/signup", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({
      //       email: `${formData.email}@${formData.emailDomain}`,
      //       id: formData.id,
      //       password: formData.password,
      //     }),
      //   });
      //   if (response.ok) {
      //     alert("회원가입이 완료되었습니다!");
      //     // 페이지 이동 등
      //   } else {
      //     const data = await response.json();
      //     alert(data.message || "회원가입에 실패했습니다.");
      //   }
    } catch (error) {
      console.error("회원가입 에러:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return {
    formData,
    errors,
    emailCheck,
    onChange,
    handleEmailVerify,
    handleEmailVerified,
    handleSubmit,
  };
};
