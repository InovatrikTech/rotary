import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },
    { path: "/membership", label: "Membership" },
    {
      label: "About Us",
      children: [
        { path: "/about", label: "Who We Are?" },
        { path: "/office-bearers", label: "Office Bearers" },
        { path: "/past-presidents", label: "Past Presidents" },
        { path: "/history", label: "History" },
      ],
    },
    { path: "/contact", label: "Contact" },
    { path: "/volunteer", label: "Volunteer" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-white to-blue-50 rounded-full flex items-center justify-center p-1.5 shadow-md border border-blue-200">
              <img 
                src="/lovable-uploads/d6a39d20-7962-4f2c-9415-3993d8a90904.png"
                alt="Rotary International Logo"
                className="w-full h-full object-contain opacity-90"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="font-bold text-blue-900 text-lg">R</span>';
                    parent.className = "w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-md";
                  }
                }}
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg">Rotary Club</h1>
              <p className="text-xs text-blue-200">of Papatoetoe Central</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navItems.map((item) =>
              item.children ? (
                <div className="relative group" key={item.label}>
                  <button className="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-blue-100 hover:bg-blue-800 hover:text-white flex items-center focus:outline-none">
                    {item.label}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white text-blue-900 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-20">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2 text-sm hover:bg-blue-100 ${isActive(child.path) ? 'bg-blue-100 font-semibold' : ''}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "bg-blue-800 text-yellow-400"
                      : "text-blue-100 hover:bg-blue-800 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-blue-800"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="">
                    <div className="px-3 py-2 text-sm font-medium text-blue-100">{item.label}</div>
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                            isActive(child.path)
                              ? "bg-blue-700 text-yellow-400"
                              : "text-blue-100 hover:bg-blue-700 hover:text-white"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? "bg-blue-700 text-yellow-400"
                        : "text-blue-100 hover:bg-blue-700 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

