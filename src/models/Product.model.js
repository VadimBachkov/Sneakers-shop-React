import { makeAutoObservable } from "mobx";

import AirMax from 'assets/ProductImg/AirMax.png';
import BlazerMid from 'assets/ProductImg/BlazerMid.png';
import NikeBlazer from 'assets/ProductImg/NikeBlazer.png';
import PumaX from 'assets/ProductImg/PumaX.png';

class ProductsModel {
    products = [];

    loading = false;

    constructor() {
        makeAutoObservable(this);
    }

    fetch() {
        this.loading = true;
        setTimeout(() => {
            this.products = [
                {
                    image: AirMax,
                    description: "Nike Air Max 270",
                    price: 99,

                },
                {
                    image: BlazerMid,
                    description: "Nike Blazer Mid Suede",
                    price: 119,
                },
                {
                    image: NikeBlazer,
                    description: "Nike Blazer Mid Suede",
                    price: 129,
                },
                {
                    image: PumaX,
                    description: "Puma X Future Rider",
                    price: 109,
                },
                {
                    image: NikeBlazer,
                    description: "Nike Blazer Mid Suede",
                    price: 129,
                }
            ];

            this.loading = false;
        }, 1000);
    }
}

export default new ProductsModel();