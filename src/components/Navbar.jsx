import { useState } from "react";

// This is a "functional component" - just a JS function that returns JSX (HTML-like code)
function Navbar() {
  // useState gives us a variable (isOpen) + a function to update it (setIsOpen)
  // We use this to show/hide the menu on mobile screens
  const [isOpen, setIsOpen] = useState(false);

  // Array of links so we don't repeat the same code 4 times
  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo / name */}
        <a href="#" className="font-mono text-teal-400 font-bold tracking-tight">
          aryan<span className="text-slate-500">.dev</span>
        </a>

        {/* Desktop links - hidden on small screens (sm:flex), shown on larger */}
        <div className="hidden sm:flex gap-8 font-mono text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-teal-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button - only shown on small screens */}
        <button
          className="sm:hidden text-slate-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu - only rendered when isOpen is true */}
      {isOpen && (
        <div className="sm:hidden flex flex-col gap-4 px-6 pb-6 font-mono text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-teal-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;