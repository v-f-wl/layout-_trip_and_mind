// import Burger from '../icons/Burger';
import './Header.scss'
const Header = () => {
  return ( 
    <div className="container header">
      <a href="" className="header__logo">
        <picture>
          <img src="/logo.svg" alt="Логотип сайта" />
        </picture>
      </a>
      <ul className="header__nav">
        <li>
          <a href="#">Все туры</a>
        </li>
        <li>
          <a href="#">Отзывы</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
      </ul>
      {/* <Burger/> */}
    </div>
  );
}
 
export default Header;