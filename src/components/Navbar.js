import { useState, useRef, useEffect } from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    showLinks
      ? (linksContainerRef.current.style.height = `${linksHeight}px`)
      : (linksContainerRef.current.style.height = `0px`);
  }, [showLinks]);

  const hideLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <ul className="nav-icons">
            {socialLinks.map((link) => {
              return <SocialLink key={link.id} {...link} />;
            })}
          </ul>
          <button
            className="nav-toggle"
            onClick={() => {
              setShowLinks(!showLinks);
            }}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div ref={linksContainerRef} className="links-container">
          <ul ref={linksRef} className="links">
            {pageLinks.map((link) => {
              return <PageLink key={link.id} {...link} hideLinks={hideLinks} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
