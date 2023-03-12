import React, { useContext } from 'react';
import { Store } from 'app/App';
import { observer } from "mobx-react-lite";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import Liked from 'assets/HeaderImg/Liked.svg';
import style from './style.module.css';

function OrderCard({ image, description, price ,index}) {
    const [store, setStore] = useContext(Store);

    let count = 0;
    store.user.shoppingCart.forEach((item) => {
        if (item.price === price) {
            count = item.count;
        }
    });

    const addFavorites = () => {
        if (count === 0) {
            count += 1;
            setStore((pre) => ({
                ...pre,
                user: { ...pre.user, favorites: [...pre.user.favorites, { image, description, price }] },
            }));
        }
        else {
            count += 1;
            setStore((pre) => ({
                ...pre,
                user: {
                    ...pre.user, favorites: store.user.favorites.map((item) => {
                        if (item.description === description) {
                            return {
                                ...item,
                                count: count
                            }
                        }
                        else {
                            return item
                        }
                    })
                },
            }));
        }
    };
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

    return (
        <div className={style.productWrapper}>
            <div className={style.image}>
                <div className={style.liked}><img src={Liked} alt="Liked" onClick={addFavorites} /></div>
                <img className={style.image} src={image} alt="Image" />
            </div>
            <div className={style.description}>{description}</div>
            <div className={style.productFooter}>
                <div className={style.info}>
                    <div className={style.title}>Price:</div>
                    <div className={style.price}>{price}, $</div>
                </div>
                <div className={style.addBtn}>
                    <IconButton aria-label="delete" size='large'>
                        <DeleteIcon
                        description = {description}
                        onClick={deleteOrder} />
                    </IconButton>
                </div>
            </div>
        </div>
    )

}

export default observer(OrderCard)