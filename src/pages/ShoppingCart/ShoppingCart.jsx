import React, { useContext , useEffect} from "react";
import { observer } from "mobx-react-lite";

import { ProductCard } from "components";
import { Store } from "app/App";

function ShoppingCart ({ image, description, price }) {
    const [store, setStore] = useContext(Store);
    console.log(store);

    function deleteOrder(id) {
        setStore((pre) => ({
            ...pre,
            user: {
                ...pre.user,
                shoppingCart: store.user.shoppingCart.filter(
                    (item) => item.props !== id
                ),
            },
        }));
    }
    return (
        <><div>Корзина</div>
            <div>
                {!store.user.shoppingCart.length ? (
                    <>Корзина пуста</>
                ) : (
                    store.user.shoppingCart.map((item) => (
                        <ProductCard
                            image={item.image}
                            description={item.description}
                            price={item.price}
                            onDelete={deleteOrder}
                        />
                    ))
                )}</div></>
    )
}


export default observer(ShoppingCart);