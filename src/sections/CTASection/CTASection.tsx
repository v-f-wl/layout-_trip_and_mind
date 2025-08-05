import Button from '../../components/UI/Button';
import './CTASection.scss'
const CTASection = () => {
  return ( 
    <div className="cta">

      <div className="container cta-body">  
        <div className="cta-body__title">
          <h2>Оставьте заявку на бесплатную консультацию</h2>
          <p>Мы перезвоним вам в ближайшее время</p>
        </div>
        <div className="cta-body__form">
          <input type="text" placeholder='Ваше имя'/>
          <input type="tel" placeholder="123-4567-8901"/>
          <Button style='regular' size='small' label='Отправить заявку'/>
          <div className="cta-body__form--info">
            Нажимая кнопку, вы даёте согласие на <a href="">обработку персональных данных</a>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default CTASection;