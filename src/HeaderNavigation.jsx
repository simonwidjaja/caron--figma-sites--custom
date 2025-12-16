import React from 'react';

const HeaderNavigation = ({ logo, links = [] }) => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          {logo || 'Logo'}
        </div>
        <ul className="flex space-x-6">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
