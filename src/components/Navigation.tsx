import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  name: string;
  path: string;
  isIcon?: boolean;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links: NavLink[] = [
    { name: "DOMEK", path: "/", isIcon: true },
    { name: "O mnie", path: "/about" },
    { name: "Usługi", path: "/services" },
    // { name: "Opinie", path: "/testimonials" },
    // { name: "Blog", path: "/blog" },
    { name: "Kalkulatory", path: "/calculators" },
    { name: "Do pobrania", path: "/downloads" },
    { name: "Kontakt", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl lg:text-3xl font-light text-foreground tracking-wide">
              NutriBalance
            </h1>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-light rounded-lg transition-all flex items-center justify-center ${
                  isActive(link.path)
                    ? "text-primary bg-elegant-taupe-light"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                title={link.isIcon ? "Strona główna" : link.name}
              >
                {link.isIcon ? (
                  <Home size={20} className="w-5 h-5" />
                ) : (
                  link.name
                )}
              </Link>
            ))}
            {/* <Button
                            asChild
                            variant="elegant"
                            className="ml-4 rounded-full font-light"
                        >
                            <Link to="/contact">Book Now</Link>
                        </Button> */}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 text-base font-light rounded-lg transition-all ${
                  isActive(link.path)
                    ? "text-primary bg-elegant-taupe-light"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.isIcon ? (
                  <>
                    <Home size={20} className="mr-3" />
                    <span>Strona główna</span>
                  </>
                ) : (
                  link.name
                )}
              </Link>
            ))}
            {/* <Button
                            asChild
                            variant="elegant"
                            className="w-full rounded-full font-light"
                        >
                            <Link to="/contact" onClick={() => setIsOpen(false)}>
                Book Now
                            </Link>
                        </Button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
