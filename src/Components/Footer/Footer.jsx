import socialLinks from "../../helpers/staticFooter";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="social-block">
        {socialLinks.map(({ id, src, alt, link }) => (
          <li key={id} className="social-block__item">
            <a href={link} className="social-block__item_link">
              <img src={src} className="social-block__icon" alt={alt} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
