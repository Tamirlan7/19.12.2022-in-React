import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useSearch } from "../hooks/useSort";
import '../styles/Basket.css';
import Button from "../UI/Button/Button";

export default function BasketProduct ({product, basket, setBasket}) {

    const navigate = useNavigate();

    const incrementAmount = currentProduct => {
        const newBasket = basket.map(product => {
            if(product.id === currentProduct.id) {
                ++product.productAmount;
                product.price = product.staticPrice * product.productAmount;
            }
            return product;
        })

        setBasket(newBasket);
        localStorage.setItem('basket', JSON.stringify(newBasket));
    };

    const decrementAmount = currentProduct => {
        const newBasket = basket.map(product => {
            if(product.id === product.id && product.productAmount >= 2) {
                --product.productAmount;
                product.price = product.staticPrice * product.productAmount;
            }
            return product;
        })

        setBasket(newBasket);
        localStorage.setItem('basket', JSON.stringify(newBasket));
    };

    const deleteFromBasket = currentProduct => {
        const newBasket = basket.filter(product => product.id !== currentProduct.id);
        setBasket(newBasket);
        localStorage.setItem('basket', JSON.stringify(newBasket));
    };

    const getDetails = product => {
        navigate({
            pathname: '/details',
            search: createSearchParams({
                product: JSON.stringify(product)
            }).toString()
        })
    }

    return (
        <div className="basket__product">
            <h4 className="basket__product__name" style={{marginBottom: '15px'}}>{ product.name }</h4>
            <div className="basket__product__image__block">
                <img className="product__img" src={product.img} alt="basket__product__image" />
            </div>
            <h4 className="basket__product__price" style={{margin: '10px 0'}}>Цена:  { product.price }&#x20B8;</h4>
            <h4 className="basket__product__category">Количество: { product.productAmount }</h4>
            <div className="amount__buttons">
                <Button onClick={() => incrementAmount(product)}>+</Button>
                <Button 
                    style={{borderLeft: 'none'}}
                    onClick={() => decrementAmount(product)}
                >-</Button>
            </div>
            <Button 
                style={{margin: 10}}
                onClick={() => deleteFromBasket(product)}
            >Удалить из корзины</Button>
            <Button onClick={() => getDetails(product)}>
                Подробнее
            </Button>
        </div>
    );
};