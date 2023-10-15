import styles from './Card.module.css';
import colon from '../assets/it-colon.jpg';
import {useDispatch} from 'react-redux';
import {choseFlipCard, checkCards} from '../features/cardsSlice';

const Card = ({id, url, alt, flipped, matched}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(choseFlipCard({id, matched, flipped}));
    dispatch(checkCards());
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={`${styles.inner} ${flipped ? styles.flipped : ''} ${matched ? styles.matched : ''}`}>
        <img className="card-image" width={300} height={300} src={url} alt={alt}></img>
        <img className={`card-image ${styles.colon}`} width={300} height={300} src={colon} alt={'it-colon'}></img>
      </div>
    </div>
  );
};

export default Card;
