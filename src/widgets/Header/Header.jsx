import Logo from 'assets/HeaderImg/Logo.svg';
import Cart from 'assets/HeaderImg/Cart.svg';
import Liked from 'assets/HeaderImg/Liked.svg';
import Account from 'assets/HeaderImg/Account.svg';

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
          <img className={style.cart} src={Cart} alt="Cart" />
        </div>
        <div className={style.orderSum}>555 BYN</div>
        <div className={style.liked}>
          <img className={style.liked} src={Liked} alt="Liked" />
        </div>
        <div className={style.user} >
          <img className={style.user} src={Account} alt="Account" />
        </div>
      </div>
    </div>
  );
}

export default Header;