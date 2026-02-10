import { useState } from "react";

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

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // 이메일 중복 체크 필요할듯?

    // try {
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
    // } catch (error) {
    //   console.error("회원가입 에러:", error);
    //   alert("서버 오류가 발생했습니다.");
    // }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};
