import "./Join.css";

const Join = () => {
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

  return (
    <div className="join-page">
      <div className="page-title">일반 회원 가입</div>

      <form>
        <div>
          <label>이메일</label>
          <div>
            <input type="text" />
            <span>@</span>
            <div className="select-wrapper">
              <select>
                {domainList.map((domain, idx) => (
                  <option key={idx}>{domain}</option>
                ))}
              </select>
            </div>
          </div>

          <span className="warn-info">필수 입력 항목입니다.</span>
        </div>

        <div>
          <label>아이디</label>
          <input type="text" name="id" />
          <span className="warn-info">필수 입력 항목입니다.</span>
        </div>

        <div>
          <label>비밀번호</label>
          <span className="desc">
            영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해 주세요.
          </span>
          <input type="passward" name="password" />
          <span className="warn-info">필수 입력 항목입니다.</span>
        </div>

        <div>
          <label>비밀번호 확인</label>
          <input type="password " />
          <span className="warn-info">
            확인을 위해 비밀번호를 다시 입력해 주세요.
          </span>
        </div>

        <div>
          <label>약관 동의</label>

          <div className="agree-wrapper">
            <div>
              <input type="checkbox" id="agreeAll" />
              <label htmlFor="agreeAll">전체 동의</label>
            </div>

            <div>
              <input type="checkbox" id="agreeFourteen" />
              <label htmlFor="agreeFourteen">
                만 14세 이상입니다<span className="agree-required">(필수)</span>
              </label>
            </div>

            <div>
              <input type="checkbox" id="agreeTerms" />
              <label htmlFor="agreeTerms">
                이용 약관<span className="agree-required">(필수)</span>
              </label>
            </div>
          </div>

          <span className="warn-info">약관에 동의해 주세요.</span>
        </div>

        <button type="button">회원 가입하기</button>
      </form>
    </div>
  );
};

export default Join;
