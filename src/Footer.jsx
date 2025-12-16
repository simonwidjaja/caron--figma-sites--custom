import React from 'react';

const Footer = ({ copyrightText, links = [] }) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>{copyrightText || `© ${new Date().getFullYear()} Caron Publications. Alle Rechte vorbehalten.`}</p>
        </div>
        <div className="flex space-x-4">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-gray-300 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
