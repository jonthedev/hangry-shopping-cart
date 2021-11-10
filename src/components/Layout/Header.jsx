import mealsImage from '../../assets/meal2.png';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>Hangry</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A pizza on a dining table' />
      </div>
    </>
  );
}
