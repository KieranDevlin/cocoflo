import React, { useState } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import './styles.scss';
const NavBar = ({ alt, className, img, imgURL, isResponsive, navItems }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleIcon = (icon) => {
    if (icon === 'github') {
      return <GitHubIcon />;
    }
    if (icon === 'email') {
      return <MailIcon />;
    }

    if (icon === 'linkedin') {
      return <LinkedInIcon />;
    }
  };

  return (
    <nav className={className}>
      {img && (
        <a href={imgURL}>
          <img src={img} alt={alt} />
        </a>
      )}

      {window.innerWidth < 768 &&
        isResponsive &&
        (menuToggle ? (
          <CloseIcon
            onClick={() => setMenuToggle(!menuToggle)}
            className="drop-down-menu"
          />
        ) : (
          <MenuIcon
            onClick={() => setMenuToggle(!menuToggle)}
            className="drop-down-menu"
          />
        ))}
      <ul
        className={
          window.innerWidth < 768
            ? `
          ${isResponsive ? 'drop-down-menu-container' : ''}
          ${isResponsive && (menuToggle ? 'menu-open' : 'menu-closed')}`
            : null
        }
      >
        {navItems?.map((item) => (
          <li key={item.id}>
            {item.icon ? (
              <a href={item.link}>{handleIcon(item.icon)}</a>
            ) : (
              <a href={item.link}>{item.text}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
