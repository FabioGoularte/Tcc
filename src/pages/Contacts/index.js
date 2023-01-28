import './style.css';
import { faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contacts() {
  return (
    <div className="container">
      <h2>Contacts</h2>
      <div className="line"></div>
      <p>
        Você pode entrar em contato comigo através das minhas redes sociais ou, se preferir,
        através do whatsapp! Basta clicar no ícone correspondente abaixo que você será redirecionado.
      </p>
      <div className="contact-icons">
        <a href="https://github.com/FabioGoularte" target="new">
          <i><FontAwesomeIcon icon={faGithub} /></i>
          <p>Github</p>
        </a>
        <a href="https://www.instagram.com/biim_goulart/" target="new">
          <i><FontAwesomeIcon icon={faInstagram} /></i>
          <p>Instagram</p>
        </a>
        <a href="https://www.linkedin.com/in/fabio-goularte" target="new">
          <i><FontAwesomeIcon icon={faLinkedinIn} /></i>
          <p>Linkedin</p>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5519992826845" target="new">
          <i><FontAwesomeIcon icon={faWhatsapp} /></i>
          <p>Whatsapp</p>
        </a>
      </div>
    </div>
    
    
  );
}