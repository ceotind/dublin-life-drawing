import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium">DoodleHaven</h3>
            <p className="text-gray-600 text-sm">
              Inspiring creativity through art education in the heart of Dublin.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/classes" className="text-gray-600 hover:text-primary text-sm">
                  Art Classes
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-primary text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>123 Creative Lane</li>
              <li>Dublin 2, Ireland</li>
              <li>+353 1 234 5678</li>
              <li>info@doodlehaven.ie</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} DoodleHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;