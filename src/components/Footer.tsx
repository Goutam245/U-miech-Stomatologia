import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary pt-16 pb-8">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Col 1: Logo */}
        <div>
          <span className="text-2xl font-display font-bold text-primary-foreground">uśmiech</span>
          <p className="text-primary-foreground/60 font-body text-sm mt-3 leading-relaxed">
            Prawdziwy uśmiech dla każdego
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-accent transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-accent transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div>
          <h4 className="font-label font-bold text-primary-foreground text-sm tracking-wider mb-4">NAWIGACJA</h4>
          <ul className="space-y-2 font-body text-sm">
            {[
              { label: "Co robimy", href: "/uslugi" },
              { label: "Kim jesteśmy", href: "/o-nas" },
              { label: "Cennik", href: "/cennik" },
              { label: "Kontakt", href: "/kontakt" },
            ].map(l => (
              <li key={l.href}>
                <Link to={l.href} className="text-primary-foreground/60 hover:text-accent transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Services */}
        <div>
          <h4 className="font-label font-bold text-primary-foreground text-sm tracking-wider mb-4">USŁUGI</h4>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
            <li>Implantologia</li>
            <li>Ortodoncja</li>
            <li>Stomatologia Estetyczna</li>
            <li>Wybielanie</li>
            <li>Stomatologia Dziecięca</li>
            <li>Endodoncja</li>
          </ul>
        </div>

        {/* Col 4: Locations */}
        <div>
          <h4 className="font-label font-bold text-primary-foreground text-sm tracking-wider mb-4">LOKALIZACJE</h4>
          <div className="space-y-3 font-body text-sm text-primary-foreground/60">
            <div>
              <p className="text-primary-foreground/80 font-semibold">📍 Kalisz</p>
              <p>ul. Przykładowa 10, 62-800</p>
            </div>
            <div>
              <p className="text-primary-foreground/80 font-semibold">📍 Turek</p>
              <p>ul. Przykładowa 5, 62-700</p>
            </div>
            <a
              href="https://www.znanylekarz.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline inline-block mt-2"
            >
              ZnanyLekarz.pl →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40 font-body">
        <span>© 2026 Klinika Uśmiech. Wszelkie prawa zastrzeżone.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary-foreground/60 transition-colors">Polityka prywatności</a>
          <a href="#" className="hover:text-primary-foreground/60 transition-colors">RODO</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
