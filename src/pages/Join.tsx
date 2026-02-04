const Join = () => {
  const domainList = [
    "선택해 주세요.",
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
      <div className="page-title">회원 가입</div>

      <form>
        <div>
          <label>이메일</label>
          <input type="text" />
          <span>@</span>
          <select>
            {domainList.map((domain, idx) => (
              <option key={idx} disabled={idx === 0} selected={idx === 0}>
                {domain}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>아이디</label>
          <input type="text" name="id" />
        </div>

        <div>
          <label>비밀번호</label>
          <span>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해 주세요.</span>
          <input type="passward" name="password" />
        </div>

        <div>
          <label>비밀번호 확인</label>
          <input type="password " />
        </div>

        <div>
          <label>약관 동의</label>

          <label>전체 동의</label>
          <input type="checkbox" />

          <label>만 14세 이상입니다.(필수)</label>
          <input type="checkbox" />

          <label>이용 약관(필수)</label>
          <input type="checkbox" />
        </div>
      </form>
    </div>
  );
};

export default Join;
