import SocialMedia from '../UI/SocialMedia';
import './Footer.scss';

const Footer = () => {
  return ( 
    <div className="footer">
      <div className="container footer-body">
        <div className="footer-body__info">
          <a href="">
            <picture>
              <img src="/logo-dark.svg" alt="Логотип сайта" />
            </picture>
          </a>
          <div>
            Политика конфиденциальности
          </div>
          <div>
            Соглашение на обработку персональных данных
          </div>
        </div>
        <SocialMedia/>
      </div>
    </div>
   );
}
 
export default Footer;