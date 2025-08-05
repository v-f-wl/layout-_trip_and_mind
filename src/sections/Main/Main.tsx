import IArrow from '../../components/icons/IArrow';
import Button from '../../components/UI/Button';
import Title from '../../components/UI/Title';
import './Main.scss'
const Main = () => {
  return ( 
    <div className="main">
      <div className="main-baner">
        <div className="baner">
            <div className="baner__date">
              10-24
            </div>
            <div>
              апреля
            </div>
        </div>
        <div className="baner-info">
          <div className="baner-info__label">
             Большое ущелье на острове Гавайи
          </div>
          <a href="">
            <IArrow/>
          </a>
        </div>
      </div>
      <div className="main-info">
        <Title label='Посмотрите все направления туров'/>
        <p className="main-info__text">
          Берега океанов и дикие пляжи с редкими породами деревьев. Местная архитектура и первозданный вид дикой природы
        </p>
        <Button style='secondery' label='Смотреть все'/>
      </div>
    </div>
  );
}
 
export default Main;