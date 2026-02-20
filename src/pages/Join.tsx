import { useSignupForm } from "../hooks/useJoin";
import "./Join.css";

const domainList = [
  "naver.com",
  "hanmail.net",
  "daum.net",
  "gmail.com",
  "nate.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "직접 입력",
];

const Join = () => {
  const {
    formData,
    errors,
    emailCheck,
    onChange,
    handleEmailVerify,
    handleSubmit,
  } = useSignupForm();

  const renderEmailMessage = () => {
    if (errors.email)
      return <span className="warn-info">필수 입력 항목입니다.</span>;

    if (emailCheck.status === "available")
      return (
        <span
          className={
            emailCheck.status === "available" ? "success-info" : "warn-info"
          }
        >
          {emailCheck.message}
        </span>
      );

    if (emailCheck.status === "sent")
      return <span className="success-info">{emailCheck.message}</span>;
    return null;
  };

  return (
    <div className="join-page">
      <div className="page-title">일반 회원 가입</div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>이메일</label>
          <div>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={onChange}
            />
            <span>@</span>
            <div className="select-wrapper">
              <select
                name="emailDomain"
                value={formData.emailDomain}
                onChange={onChange}
              >
                {domainList.map((domain, idx) => (
                  <option key={idx}>{domain}</option>
                ))}
              </select>
            </div>
          </div>

          {renderEmailMessage()}

          <button
            type="button"
            className="check-email"
            onClick={handleEmailVerify}
          >
            이메일 인증하기
          </button>
        </div>

        <div>
          <label>아이디</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={onChange}
          />
          {errors.id && (
            <span className="warn-info">필수 입력 항목입니다.</span>
          )}
        </div>

        <div>
          <label>비밀번호</label>
          <span className="desc">
            영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해 주세요.
          </span>
          <input
            type="passward"
            name="password"
            value={formData.password}
            onChange={onChange}
          />
          {errors.password && (
            <span className="warn-info">필수 입력 항목입니다.</span>
          )}
        </div>

        <div>
          <label>비밀번호 확인</label>
          <input
            type="password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={onChange}
          />
          {errors.passwordConfirm && (
            <span className="warn-info">
              확인을 위해 비밀번호를 다시 입력해 주세요.
            </span>
          )}
        </div>

        <div>
          <label>약관 동의</label>

          <div className="agree-wrapper">
            <div>
              <input
                type="checkbox"
                id="agreeAll"
                name="agreeAll"
                checked={formData.agreeAll}
                onChange={onChange}
              />
              <label htmlFor="agreeAll">전체 동의</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="agreeAge"
                name="agreeAge"
                checked={formData.agreeAge}
                onChange={onChange}
              />
              <label htmlFor="agreeAge">
                만 14세 이상입니다<span className="agree-required">(필수)</span>
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={onChange}
              />
              <label htmlFor="agreeTerms">
                이용 약관<span className="agree-required">(필수)</span>
              </label>
            </div>
          </div>

          {errors.agreeAll && (
            <span className="warn-info">약관에 동의해 주세요.</span>
          )}
        </div>

        <button type="submit">회원 가입하기</button>
      </form>
    </div>
  );
};

export default Join;
