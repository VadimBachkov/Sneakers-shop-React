import React, { useContext } from 'react';
import { Store } from 'app/App';

import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


import style from './style.module.css';

function ProductCard({image, description, price}) {
    const [store,setStore] = useContext(Store);

    let count = 0;
    store.user.shoppingCart.forEach((item) =>{
        if(item.description === description){
            count = item.count;
        }
    });

    const onAddProduct = () => {
        if(count === 0){
            count += 1;
            setStore((pre) => ({
            ...pre,
            user: { ...pre.user, shoppingCart: [...pre.user.shoppingCart, { image, description, price }] },
            }));
        }
        else {
            count += 1;
            setStore((pre) => ({
                ...pre,
                user: { ...pre.user, shoppingCart: store.user.shoppingCart.map((item) => {
                    if(item.description === description){
                        return {
                            ...item,
                            count: count
                        }
                    }
                    else {
                        return item
                    }
                }) },
            }));
        }
    };

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
                        <AddShoppingCartIcon color='success' fontSize="inherit" onClick={onAddProduct} />
                    </IconButton>
                </div>
            </div>
        </div>
    )

}

export default ProductCard