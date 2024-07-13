import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ fontWeight: 'bold', textAlign: 'right', paddingTop: '40px' }}>
      Mildzsu {currentYear}
    </div>
  );
};

export default Footer;
