import marvel_logo from './marvel_logo.svg';
import './Title.css';

const Title = ({ title }) => {
  return (
    <div className='title-box'>
      <div className='img-box'>
        <img src={marvel_logo} alt='Marvel Comics Logo' />
      </div>
      <h5>{`Let's save the world !`}</h5>
      <h2>{ title }</h2>
    </div>
  );
};

export default Title;