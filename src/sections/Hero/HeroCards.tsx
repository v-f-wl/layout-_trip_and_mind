import IArrow from '../../components/icons/IArrow';
import './HeroCards.scss';
const HeroCards = ({
  order,
  link,
  title,
  imageLink,
}: {
  order: string;
  link?: string; 
  title: string;
  imageLink: string;
}) => {
  return ( 
    <a 
      href={link} 
      style={{ backgroundImage: `url(${imageLink})`}}
      className="hero-card" 
    >
      <div className="hero-card__order">
        {order}
      </div>
      <div className="hero-card__title">
        <span>
          {title}
        </span>
        <IArrow/>
      </div>
    </a>
  )
}
 
export default HeroCards;