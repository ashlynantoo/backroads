import { pageLinks, socialLinks } from "../data";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          {pageLinks.map((link) => {
            return <PageLink key={link.id} {...link} />;
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            return <SocialLink key={link.id} {...link} />;
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel & tours company
          <span>{new Date().getFullYear()}</span>. all rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
