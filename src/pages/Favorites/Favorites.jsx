import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { Store } from "app/App";
import { ProductCard } from "components/ProductCard";
import Button from '@mui/material/Button';

import Fav from 'assets/OrdersImg/fav.png';

import style from './style.module.css'
import { useNavigate } from "react-router-dom";
import { ROUTES } from "shared/consts";


function Favorites({ image, description, price }) {
    const [store, setStore] = useContext(Store);
    console.log(store);

    const navigate = useNavigate();

    return (
        <><div className={style.menuTitle}>Избранные</div>
            <div className={style.list}>
                {!store.user.favorites.length ? (
                    <div className={style.image}>
                        <img src={Fav} alt="There are no favorites" />
                        <div>Закладок нет :(</div>
                        <div>Вы ничего не добавляли в закладки</div>
                        <Button variant="contained" color="success" onClick={()=>navigate(ROUTES.HOME)}>
                            Вернуться назад
                        </Button>
                    </div>
                ) : (
                    store.user.favorites.map((item) => (
                        <ProductCard
                            image={item.image}
                            description={item.description}
                            price={item.price}
                        />
                    ))
                )}</div>
        </>
    )
}


export default observer(Favorites);