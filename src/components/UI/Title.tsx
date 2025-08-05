import './Title.scss'
const Title = ({label}: {label: string}) => {
  return ( 
    <h2 className="title">{label}</h2>
  );
}
 
export default Title;