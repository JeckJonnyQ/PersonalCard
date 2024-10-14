import personalData from "../../helpers/staticMain";
import "./Main.scss";

export default function Main() {
  return (
    <div className="main">
      <h1 className="main__title">{personalData.name}</h1>
      <p className="main__job">{personalData.job}</p>
      <a href={personalData.websiteLink} className="main__weblink">
        {personalData.website}
      </a>

      <div className="inner">
        <a
          href={personalData.email.link}
          className="inner__link email"
          target="_blank"
        >
          <img
            src={personalData.email.icon}
            className="inner__link_icon"
            alt={personalData.email.alt}
          />
          <span>{personalData.email.text}</span>
        </a>
        <a
          href={personalData.linkedin.link}
          className="inner__link linkedin"
          target="_blank"
        >
          <img
            src={personalData.linkedin.icon}
            className="inner__link_icon"
            alt={personalData.linkedin.alt}
          />
          <span>{personalData.linkedin.text}</span>
        </a>
      </div>

      <h3 className="main__about">About</h3>
      <p className="main__desc">{personalData.about}</p>
      <h3 className="main__interests">Interests</h3>
      <p className="main__desc">{personalData.interests}</p>
    </div>
  );
}
