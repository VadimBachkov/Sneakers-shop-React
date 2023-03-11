import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { ProductCard } from "components";
import { Store } from "app/App";

function Favorites({ image, description, price }) {
    const [store, setStore] = useContext(Store);
    console.log(store);

    function deleteFavorite(id) {
        setStore((pre) => ({
            ...pre,
            user: {
                ...pre.user,
                favorites: store.user.favorites.filter(
                    (item) => item.props !== id
                ),
            },
        }));
    }
    return (
        <>
            <div>Избранные</div>
            <div>
                {!store.user.favorites.length ? (
                    <>Пусто</>
                ) : (
                    store.user.favorites.map((item) => (
                        <ProductCard
                            image={item.image}
                            description={item.description}
                            price={item.price}
                            onDelete={deleteFavorite}
                        />
                    ))
                )}</div>
        </>
    )
}


export default observer(Favorites)