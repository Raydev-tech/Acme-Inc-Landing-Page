import React from 'react';
import { Facebook, Twitter, Instagram, } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Logo and Social Media Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">A</span>
              </div>
              <span className="font-bold text-xl">Acme Inc</span>
            </div>
            <p className="mt-4 max-w-xs text-muted-foreground">
              Empowering businesses with innovative solutions since 2010.
            </p>

            {/* Social Media Links */}
            <div className="mt-6 flex gap-6">
              <a href="https://www.facebook.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.instagram.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            {/* Product Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Integrations</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Changelog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Roadmap</a></li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">About</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Press</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Partners</a></li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Status</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Acme Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
