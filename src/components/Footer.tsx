import import { Instagram, Youtube, Mail } from "lucide-react";
import { SiTiktok } from "react-icons/si";

import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { name: "Portfolio", path: "/gallery" },
    { name: "Investment", path: "/investment" },
    { name: "Print Credit and Pricing", path: "/print-pricing" },
    { name: "For Photographers", path: "/for-photographers" },
    { name: "Bookings", path: "/bookings" },
    { name: "Events", path: "/events" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <footer className="bg-secondary border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col items-center space-y-8">
          {/* Footer Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://instagram.com//jandjfilmsnc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
              <a
              href="https://titkok.com//JandJFilms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Titktok"
            >
              <siTiktok size={24} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Youtube"
            >
              <Youtube size={24} />
            </a>
            <a
              href="mailto:Jacob_agbetor@yahoo.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} J&J Films. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
