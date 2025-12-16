# Caron Figma Sites Custom

A React component library for Figma Sites, built with Tailwind CSS.

## Development

To run the demo page locally:

```bash
npm run dev
```

## Installation

```bash
npm install caron--figma-sites--custom
```

## Usage

Import the components and use them in your React application.

```jsx
import { HeaderNavigation, Footer } from 'caron--figma-sites--custom';
import 'caron--figma-sites--custom/dist/style.css'; // Import styles

function App() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const footerLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ];

  return (
    <div>
      <HeaderNavigation logo="My Site" links={navLinks} />
      <main className="min-h-screen p-8">
        <h1>Welcome to my site</h1>
      </main>
      <Footer copyrightText="© 2023 My Site" links={footerLinks} />
    </div>
  );
}
```

## Components

### HeaderNavigation

Props:
- `logo` (string | ReactNode): The logo to display.
- `links` (array): Array of objects with `label` and `href`.

### Footer

Props:
- `copyrightText` (string): The copyright text.
- `links` (array): Array of objects with `label` and `href`.
