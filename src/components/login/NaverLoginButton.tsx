import "./NaverLoginButton.css";

type ButtonProps = {
  onClick: () => void;
};

const NaverLoginButton = ({ onClick }: ButtonProps) => {
  return (
    <button type="button" className="naver-login" onClick={onClick}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5605 10.7061L6.14573 0H0V20H6.43946V9.29768L13.8543 20H20V0H13.5605V10.7061Z"
          fill="white"
        />
      </svg>

      <div>Naver 계정으로 로그인</div>
    </button>
  );
};

export default NaverLoginButton;
