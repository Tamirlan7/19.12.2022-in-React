import React, { useState } from "react";
import '../styles/Basket.css';
import BasketProduct from "../components/BasketProduct";

export default function Basket () {
    const [basket, setBasket] = useState(
        JSON.parse(localStorage.getItem('basket')) ? JSON.parse(localStorage.getItem('basket')) : []
    );

    return (
        <div id="main__basket">
            <h1>Список добавленных товаров:</h1>
            <div id="basket">
                <div id="basket__products">
                    {basket.map(product => {
                        return <BasketProduct product={product} basket={basket} setBasket={setBasket} key={product.id}/>
                    })}
                </div>
                <div id="sum__of__busket">
                    <div>
                        <h3>Общая стоимость: { basket.reduce((sum, product) => sum + Number(product.price), 0) } &#x20B8;</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};