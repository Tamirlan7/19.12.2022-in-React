import React from "react";
import { useSearchParams } from "react-router-dom";
import '../styles/ProductDetails.css';
import Button from "../UI/Button/Button";

export default function ProductDetails () {
    const [searchparams] = useSearchParams();
    const product = JSON.parse(searchparams.get("product"));

    const addToBasket = product => {
        let basket = localStorage.getItem('basket');
        basket = basket ? basket : [];
        basket = typeof basket === 'string' ? JSON.parse(basket) : basket;
        for(let basketProduct of basket) 
            if (product.id === basketProduct.id) return;

        basket.push(product);
        localStorage.setItem('basket', JSON.stringify(basket));
    };

    return (
        <div className="product__details">
            <div className="product">
                <h3>{product.name}</h3>
                <div className="product__image__block">
                    <img src={`../${product.img}`} alt="image" className="product__img" />
                </div>
            </div>
            <div className="description">
                <h3>Описание:</h3>
                <br />
                <p>{product.description}</p>
                <h3 style={{margin: '20px 0'}}>Цена: { product.price }&#8376</h3> 
                <h3 style={{marginBottom: 20}}>Дата публикации: { product.date }</h3>
                <Button onClick={() => addToBasket(product)}>Добавить в корзину</Button>
            </div>
        </div>
    );
};