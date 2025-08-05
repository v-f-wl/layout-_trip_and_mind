import './Button.scss'
const Button = ({
  style,
  label,
  size
}:{
  style?: string,
  label: string,
  size?: string
}) => {
  return ( 
    <button 
      className={`
        ${style} 
        ${size} 
        button
      `}
    >
      {label}
    </button>
  );
}
 
export default Button;