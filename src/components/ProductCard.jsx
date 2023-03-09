import React from 'react';

import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


import style from './style.module.css';

function ProductCard(props) {
    const { image, description, price } = props;

    return (
        <div className={style.productWrapper}>
            <div className={style.image}>
                <img className={style.image} src={image} alt="Image" />
            </div>
            <div className={style.description}>{description}</div>
            <div className={style.productFooter}>
                <div className={style.info}>
                    <div className={style.title}>Price:</div>
                    <div className={style.price}>{price}, $</div>
                </div>
                <div className={style.addBtn}>
                    <IconButton color="primary" aria-label="add to shopping cart" size='large'>
                        <AddShoppingCartIcon color='success' fontSize="inherit" />
                    </IconButton>
                </div>
            </div>
        </div>
    )

}

export default ProductCard