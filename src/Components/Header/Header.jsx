import PersonalPhoto from "../../assets/PersonalPhoto.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img src={PersonalPhoto} className="header__photo" alt="personal-photo" />
    </div>
  );
}
