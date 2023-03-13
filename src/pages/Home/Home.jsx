import React from "react";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { ProductCard } from "components/ProductCard";

import Slider from 'assets/SliderImg/slider.png'
import style from './style.module.css';
import { ProductModel } from "../../models";


function Home() {

  useEffect(() => {
    ProductModel.fetch();
  }, []);

  return (
    <div className={style.menuWrapper}>
      <div className={style.sliderWrapper}>
        <div className={style.titleWrapper}>
          <div className={style.title}>Stan Smith,</div>
          <div className={style.secondaryTitle}>Forever!</div>
        </div>
        <div className={style.homeImg}><img src={Slider} alt="HomeImg" /></div>
      </div>

      <div className={style.menuTitle}>All Sneakers</div>
      <div className={style.productsWrapper}>
        {ProductModel.loading ? (
          <>Loading...</>
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