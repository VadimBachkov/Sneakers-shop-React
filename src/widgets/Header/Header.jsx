import Logo from 'assets/HeaderImg/Logo.svg';
import Cart from 'assets/HeaderImg/Cart.svg';
import Liked from 'assets/HeaderImg/Liked.svg';
 
import style from 'widgets/Header/style.module.css';

function Header() {
  return (
    <div className={style.headerWrapper}>
      <div className={style.logoWrapper}>
        <img className={style.logo} src={Logo} alt="Logo" />
        <div className={style.titleWrapper}>
          <div className={style.title}>REACT SNEAKERS</div>
          <div className={style.secondaryTitle}>Best sneaker store</div>
        </div>
      </div>
      <div className={style.cartWrapper}>
        <div className={style.cart}>
          <img src={Cart} alt="Cart" />
        </div>
        <div className={style.orderSum}>555 BYN</div>
        <div className={style.liked}>
          <img src={Liked} alt="Liked" />
        </div>
        <div className={style.user}>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;