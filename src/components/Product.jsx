import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import '../styles/Products.css';
import Button from "../UI/Button/Button";

export default function Product ({product}) {
    const navigate = useNavigate();

    const getDetails = product => {
        navigate({
            pathname: '/details',
            search: createSearchParams({
                product: JSON.stringify(product)
            }).toString()
        })
    };

    const addToBasket = product => {
        let basket = localStorage.getItem('basket');
        basket = basket ? basket : [];
        basket = typeof basket === 'string' ? JSON.parse(basket) : basket;
        for(let basketProduct of basket) 
            if (product.id === basketProduct.id) return;
        
        product.productAmount = 1;
        product.staticPrice = product.price;
        basket.push(product);
        localStorage.setItem('basket', JSON.stringify(basket));
    };

    return (
        <div className="product">
        <h4 className="product__name">{product.name}</h4>
        <div className="product__image__block">
            <img className="product__img" src={product.img} alt="product image" />
        </div>
        <h4 className="product__price">Цена:  {product.price}&#x20B8;</h4>
        <h4 className="product__category">Категория:    
        {product.category === 'computer' ? ' Компьютер' : product.category === 'toy' ? ' Игрушки' : ' Одежда'}
        </h4>
        <Button onClick={() => addToBasket(product)}>Добавить в корзину</Button>
        <Button onClick={() => getDetails(product)} >Подробнее</Button>
    </div>
    );
};