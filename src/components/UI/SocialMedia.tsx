import './SocialMedia.scss'
import IFB from "../icons/IFB";
import ITwitter from "../icons/ITwitter";
import IVk from "../icons/IVk";
import IYouTube from "../icons/IYouTube";

const SocialMedia = () => {
  return ( 
    <ul>
      <li>
        <a href="#">
          <IYouTube/>
        </a>
      </li>
      <li>
        <a href="#">
          <IFB/>
        </a>
      </li>
      <li>
        <a href="#">
          <ITwitter/>
        </a>
      </li>
      <li>
        <a href="#">
          <IVk/>
        </a>
      </li>
    </ul>
  );
}
 
export default SocialMedia;