import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "shared/consts";

import Button from '@mui/material/Button';
import Done from 'assets/OrdersImg/done.png';

import style from './style.module.css'


function Checkout() {
    const navigate = useNavigate();

    return (
        <div className={style.image}>
            <img src={Done} alt="There are no favorites" />
            <div>Заказ оформлен!</div>
            <Button variant="contained" color="success" onClick={() => navigate(ROUTES.HOME)}>
                Вернуться назад
            </Button>
        </div>
    )
}

export default Checkout;