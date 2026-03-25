import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-bold text-primary-foreground">
              The Ingredient Derm
            </h3>
            <p className="text-sm leading-relaxed">
              Personalized skincare powered by science and AI. Founded by Dr. Jackie Levin.
            </p>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wider">
              Platform
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/skin-analysis" className="text-sm hover:text-primary-foreground transition-colors">Skin Analysis</Link>
              <Link to="/consult" className="text-sm hover:text-primary-foreground transition-colors">Consultation</Link>
              <Link to="/shop" className="text-sm hover:text-primary-foreground transition-colors">Shop</Link>
              <Link to="/learn" className="text-sm hover:text-primary-foreground transition-colors">Learn</Link>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wider">
              Company
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm hover:text-primary-foreground transition-colors">About Dr. Jackie</Link>
              <Link to="/contact" className="text-sm hover:text-primary-foreground transition-colors">Contact</Link>
              <Link to="/community" className="text-sm hover:text-primary-foreground transition-colors">Community</Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wider">
              Legal
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/privacy" className="text-sm hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm hover:text-primary-foreground transition-colors">Terms & Conditions</Link>
              <Link to="/disclaimer" className="text-sm hover:text-primary-foreground transition-colors">Medical Disclaimer</Link>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-sm">
          <p>© {new Date().getFullYear()} The Ingredient Derm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
