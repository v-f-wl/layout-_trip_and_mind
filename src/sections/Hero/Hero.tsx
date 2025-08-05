import './Hero.scss';
import Header from "../../components/Header/Header";
import Button from '../../components/UI/Button';
import PlayButton from '../../components/icons/PlayButton';
import HeroCards from './HeroCards';
import SocialMedia from '../../components/UI/SocialMedia';

const HERO_GALLERY_DATE = [
  {
    order: '02',
    link: '#',
    title: 'Водопады Исландии',
    imageLink: 'hero-1.webp'
  },
  {
    order: '03',
    link: '#',
    title: 'Сказочные Доломиты',
    imageLink: 'hero-2.webp'
  },
  {
    order: '04',
    link: '#',
    title: 'Неизведанная Норвегия',
    imageLink: 'hero-3.webp'
  },
]
const Hero = () => {
  return ( 
    <div className="hero hero-body">
      <Header/>
      <div className="container">
        <h1>
          Открой для себя Новую Ирландию
        </h1>
        <p>
          Авторские туры по экзотическим уголкам от Ивана Иванова
        </p>
        <div className="hero-actions">
          <Button style='regular' label='Оставить заявку'/>
          
          <button className="hero-actions__play">
            <PlayButton/>
            <p>Посмотрите видео-отчет 2018-2019</p>
          </button>
        </div>
        <div className="hero-gallery">
          <div className="hero-gallery__contacts">
            <h3>
              Подписывайтесь в соцсетях
            </h3>
            <SocialMedia/>
          </div>
          <div className="hero-gallery__items">
            {HERO_GALLERY_DATE.map( item => (
              <HeroCards
                key={item.order}
                order={item.order}
                link={item.link}
                title={item.title}
                imageLink={item.imageLink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Hero;