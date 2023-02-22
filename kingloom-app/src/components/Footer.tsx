import React from 'react';

type FooterProps = {
  linkedin?: string;
  email?: string;
};

const Footer: React.FC<FooterProps> = ({
  linkedin = 'https://www.linkedin.com/in/madlimaijoe',
  email = 'madlimai.joe@gmail.com',
}) => {
  return (
    <footer>
      <p>Contact me:</p>
      <address>
        <a href={email}>{email}</a>
        <br />
        <a href={linkedin}>Linkedin</a>
      </address>
    </footer>
  );
};

export default Footer;
