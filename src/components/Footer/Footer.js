import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  state = {  }
  render() { 
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-center">@ 2019 | Todos Los Derechos Reservados | AZUL.MX.<br/><Link to="#">GENERADOR DE CÓDIGOS QR</Link></p>
          <ul className="social_footer_ul">
            <li><Link to="/"><i className="fa fa-facebook-f"></i></Link></li>
            <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
            <li><Link to="/"><i className="fa fa-linkedin"></i></Link></li>
            <li><Link to="/"><i className="fa fa-instagram"></i></Link></li>
          </ul>
        </div>
      </footer>
    );
  }
}
 
export default Footer;