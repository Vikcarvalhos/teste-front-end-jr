import React from 'react';
import './Footer.css'; // Crie um arquivo CSS para estilizar conforme necessário.
import Visa from '../../assets/images/payment/visa.svg';
import Elo from '../../assets/images/payment/elo.svg';
import Alelo from '../../assets/images/payment/alelo.svg';
import DinersClub from '../../assets/images/payment/dinners.svg';
import Ifood from '../../assets/images/payment/ifood.svg';
import MasterCard from '../../assets/images/payment/mastercard.svg';
import Pix from '../../assets/images/payment/pix.svg';
import AmericanExpress from '../../assets/images/payment/amex.svg';
import Ticket from '../../assets/images/payment/ticket.svg';
import Sodexo from '../../assets/images/payment/sodexo.svg';
import Facebook from '../../assets/images/social/facebook-icon.svg';
import Instagram from '../../assets/images/social/instagram-icon.svg';
import YouTube from '../../assets/images/social/youtube-icon.svg';
import Econverse from '../../assets/images/econverse.svg';
import Vtex from '../../assets/images/vtex.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sobre nós</h3>
          <ul>
            <li><a href="#">Conheça</a></li>
            <li><a href="#">Como Comprar</a></li>
            <li><a href="#">Indicação e Desconto</a></li>
          </ul>
          <div className="social-icons">
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={YouTube} alt="YouTube" />
          </div>
        </div>

        <div className="footer-section">
          <h3>Informações Úteis</h3>
          <ul>
            <li><a href="#">Fale Conosco</a></li>
            <li><a href="#">Dúvidas</a></li>
            <li><a href="#">Prazos de Entrega</a></li>
            <li><a href="#">Formas de Pagamento</a></li>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Trocas e Devoluções</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Formas de Pagamento</h3>
          <div className="payment-icons">
            <div>
                <img src={Visa} alt="Visa" />
                <img src={Elo} alt="Elo" />
                <img src={Alelo} alt="Alelo" />
            </div>
            <div>
                <img src={DinersClub} alt="Diners Club" />
                <img src={Ifood} alt="iFood" />
                <img src={MasterCard} alt="MasterCard" />
            </div>
            <div>
                <img src={Pix} alt="Pix" />
                <img src={AmericanExpress} alt="American Express" />
                <img src={Ticket} alt="Ticket" />
            </div>
            <div>
                <img src={Sodexo} alt="Sodexo" />
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3>Cadastre-se e receba nossas <span>novidades e promoções</span></h3>
          <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
          <form>
            <input type="email" placeholder="Seu e-mail" />
            <button type="submit">OK</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
            <p>
                Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
                É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
            </p>
            <div className="footer-logos">
                <img src={Econverse} alt="Econverse" />
                <img src={Vtex} alt="VTEX" />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
