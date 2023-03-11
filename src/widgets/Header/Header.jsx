import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/consts';

import Logo from 'assets/HeaderImg/Logo.svg';
import Cart from 'assets/HeaderImg/Cart.svg';
import Liked from 'assets/HeaderImg/Liked.svg';
import Account from 'assets/HeaderImg/Account.svg';
import { Avatar, Button } from '@mui/material'

import style from 'widgets/Header/style.module.css';


function Header() {
  const navigate = useNavigate();

  return (
    <div className={style.headerWrapper} >
      <div className={style.logoWrapper} onClick={()=>navigate(ROUTES.HOME)}>
        <img className={style.logo} src={Logo} alt="Logo" />
        <div className={style.titleWrapper}>
          <div className={style.title}>REACT SNEAKERS</div>
          <div className={style.secondaryTitle}>Best sneaker store</div>
        </div>
      </div>
      <div className={style.cartWrapper}>
        <div className={style.cart} onClick={()=> navigate(ROUTES.SHOPPINGCART)}>
          <img className={style.cart} src={Cart} alt="Cart" />
        </div>
        <div className={style.orderSum}>555 BYN</div>
        <div className={style.liked}>
          <img className={style.liked} src={Liked} alt="Liked" />
        </div>
        <div className={style.user} >
          <img className={style.user} src={Account} alt="Account" />
        </div>
        <div className={style.button}>
          <Button
            onClick={() => navigate(ROUTES.PROFILE)}
            variant="outlined">Sing In</Button>
        </div>
        <div className={style.button}>
          <Button
            onClick={() => navigate(ROUTES.REGISTRATION)}
            variant="contained">Sing Up</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;