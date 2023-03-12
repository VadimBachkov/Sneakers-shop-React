import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import { OrderCard } from "components/OrderCard";
import { Store } from "app/App";

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import Box from 'assets/OrdersImg/box.png';
import style from './style.module.css';
import { ROUTES } from "shared/consts";

function ShoppingCart({ image, description, price }) {
    const [store, setStore] = useContext(Store);
    console.log(store);

    const navigate = useNavigate();

    function deleteOrder(id) {
        setStore((pre) => ({
            ...pre,
            user: {
                ...pre.user,
                shoppingCart: store.user.shoppingCart.filter(
                    (item) => item.description !== id
                ),
            },
        }));
    }

    let sum = 0;
    store.user.shoppingCart.forEach((item) => {
        sum += item.price;
    });
    return (
        <><div className={style.menuTitle}>Корзина</div>
            <div className={style.list}>
                {!store.user.shoppingCart.length ? (
                    <div className={style.image}>
                    <img src={Box} alt="Box" />
                    <div>Корзина пуста</div>
                    <Button variant="contained" color="success" onClick={() => navigate(ROUTES.HOME)}>
                        Вернуться назад
                    </Button>
                </div>
                ) : (
                    store.user.shoppingCart.map((item) => (
                        <OrderCard
                            image={item.image}
                            description={item.description}
                            price={item.price}
                            onDelete={deleteOrder}
                        />
                    ))
                )}</div>
            <div className={style.sumWrapper}>
                <div className={style.sum}>Сумма: {sum}, $</div>
                <Button variant="contained" endIcon={<SendIcon />} onClick={()=>navigate(ROUTES.CHECKOUTORDER)}>
                    Оформить заказ
                </Button>
            </div>
        </>
    )
}


export default observer(ShoppingCart);