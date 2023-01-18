import { useEffect } from "react";
import React from "react";
import { observer } from "mobx-react-lite";

import { ProductModel } from "./model";

import ProductCard from "components/ProductCard";

function Home() {
    useEffect(() => {
        ProductModel.fetch();
    }, []);

    return (
        <div>
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
    )
}

export default observer(Home);