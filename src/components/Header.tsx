import "./Header.css";
import logo from "../assets/logo-text.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-wrap">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Header;
