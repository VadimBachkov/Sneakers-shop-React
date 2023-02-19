import { useEffect } from "react";
import React from "react";
import { observer } from "mobx-react-lite";

import { ProductModel } from "../../models";

import ProductCard from "components/ProductCard";

import style from './style.module.css';

function Home() {
    useEffect(() => {
        ProductModel.fetch();
    }, []);

    return (
      <div className={style.menuWrapper}>
        <div className={style.menuTitle}>All Sneakers</div>
        <div className={style.productsWrapper}>
             {ProductModel.loading ? (
          <>Loading....</>
        ) : (
            ProductModel.products.map((item) => (
            <ProductCard
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            key={item.title}
          />
        ))
      )}
        </div>
      </div>
    )
}

export default observer(Home);