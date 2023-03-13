import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/consts';
import { Store } from 'app/App';

import Logo from 'assets/HeaderImg/Logo.svg';
import Cart from 'assets/HeaderImg/Cart.svg';
import Liked from 'assets/HeaderImg/Liked.svg';
import { Avatar, Button } from '@mui/material';

import { HomeModel } from 'models';
import style from 'widgets/Header/style.module.css';

function Header() {
  const navigate = useNavigate();
  const [store] = useContext(Store);

  return (
    <div className={style.headerWrapper} >
      <div className={style.logoWrapper} onClick={()=>navigate(ROUTES.HOME)}>
        <img className={style.logo} src={Logo} alt="Logo" />
        <div className={style.titleWrapper}>
          <div className={style.title}>SNEAKERS</div>
          <div className={style.secondaryTitle}>Best sneaker store</div>
        </div>
      </div>
      <div className={style.cartWrapper}>
        <div className={style.cart} onClick={()=> navigate(ROUTES.SHOPPINGCART)}>
          <img className={style.cart} src={Cart} alt="Cart" /> {store.user.shoppingCart.length}
        </div>
        <div className={style.liked} onClick={()=> navigate(ROUTES.FAVORITES)}>
          <img className={style.liked} src={Liked} alt="Liked" /> {store.user.favorites.length}
        </div>
        <div className={style.user} >
          <Avatar
          onClick={() => HomeModel.getAction()}
          ></Avatar>
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