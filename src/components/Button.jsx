import styles from './Button.module.css';

const Button = ({text, shuffleCards}) => {
  return (
    <button className={styles.button} type="button" onClick={shuffleCards}>
      {text}
    </button>
  );
};

export default Button;
