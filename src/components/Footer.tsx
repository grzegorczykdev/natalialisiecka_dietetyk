import { Link } from "react-router-dom";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-wellness-beige border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">NutriBalance</h3>
                        <p className="text-muted-foreground mb-4">
              Professional nutrition guidance for a healthier, balanced life.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            {/* <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </a> */}
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Linkedin"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                  O mnie
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                  About Me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                  Services
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    to="/blog"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                  Blog
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li className="text-muted-foreground">Personalized Meal Plans</li>
                            <li className="text-muted-foreground">
                One-on-One Consultations
                            </li>
                            <li className="text-muted-foreground">Weight Management</li>
                            <li className="text-muted-foreground">Sports Nutrition</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center text-muted-foreground">
                                <Mail size={16} className="mr-2" />
                                <a
                                    href="mailto:hello@nutribalance.com"
                                    className="hover:text-primary transition-colors"
                                >
                  hello@nutribalance.com
                                </a>
                            </li>
                            <li className="flex items-center text-muted-foreground">
                                <Phone size={16} className="mr-2" />
                                <a
                                    href="tel:+1234567890"
                                    className="hover:text-primary transition-colors"
                                >
                  (123) 456-7890
                                </a>
                            </li>
                            <li className="flex items-start text-muted-foreground">
                                <MapPin size={16} className="mr-2 mt-1" />
                                <span>123 Wellness Street, Health City, HC 12345</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    <p>
            &copy; {new Date().getFullYear()} NutriBalance. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
