import "./Footer.css";
import Logo from "../Logo/Logo";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";

// Componente auxiliar reutilizável para as colunas de links
const InformationSection = ({ title, informations }) => {
  return (
    <div className="info-column">
      <h4>{title}</h4>
      <ul>
        {informations.map((info, index) => (
          <li key={index}>
            <a href={info.link}>{info.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const informationLinks = [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Segurança", link: "/seguranca" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/trabalhe-conosco" },
    { text: "Meus Pedidos", link: "/pedidos" },
  ];

  const categoryLinks = [
    { text: "Camisetas", link: "/produtos?categoria=camisetas" },
    { text: "Calças", link: "/produtos?categoria=calcas" },
    { text: "Bonés", link: "/produtos?categoria=bones" },
    { text: "Headphones", link: "/produtos?categoria=headphones" },
    { text: "Tênis", link: "/produtos?categoria=tenis" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="brand-container">
          <Logo variant="footer" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="sns">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>
        
        <div className="link-section">
          <InformationSection title="Informação" informations={informationLinks} />
          <InformationSection title="Categorias" informations={categoryLinks} />
          
          <div className="contact">
            <h4>Contato</h4>
            <p>Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE, 60150-161</p>
            <p>(85) 3051-3411</p>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      <p className="footer-copy">© 2024 Digital College</p>
    </footer>
  );
};

export default Footer;