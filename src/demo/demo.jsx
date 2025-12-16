import React from 'react';
import { HeaderNavigation, Footer } from '../index';

const Demo = () => {
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
  ];

  const footerLinks = [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HeaderNavigation logo="Demo Site" links={navLinks} />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to the Demo Page</h1>
        <p className="text-lg text-gray-700 mb-8">
          This page demonstrates the <code>HeaderNavigation</code> and <code>Footer</code> components 
          from the <code>caron--figma-sites--custom</code> package.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Feature 1</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Feature 2</h2>
            <p className="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Feature 3</h2>
            <p className="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          </div>
        </div>
      </main>

      <Footer copyrightText="© 2023 Demo Company Inc." links={footerLinks} />
    </div>
  );
};

export default Demo;
