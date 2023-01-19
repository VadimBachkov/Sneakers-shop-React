import React from 'react';
import addButton from 'assets/ProductImg/addButton.svg';

import style from './style.module.css';

function ProductCard(props) {
    const {image, description, price} = props;

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
                    <button className={style.btn}>
                        <img src={addButton} />
                    </button>
                </div>
            </div>
        </div>
    )
    
}

export default ProductCard