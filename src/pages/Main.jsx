import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from '../components/Products';
import Sort from "../components/Sort";
import { useSearch } from "../hooks/useSort";
import { setProductsFromServerWatcher } from "../store/reducers/products";
import '../styles/Main.css';

export default function Main () {
    const dispatch = useDispatch();
    const [sortProducts, setSortProducts] = useState({selected: '', search: ''});
    const products = useSelector(state => state.products.products);

    const sortedAndSearchedProducts = useSearch(sortProducts, products);


    useEffect(() => {
        dispatch(setProductsFromServerWatcher());
    }, []);

    return (
        <div className="main">
            <Sort selected={sortProducts.selected} search={sortProducts.search} setSortProducts={setSortProducts} />
            <Products products={sortedAndSearchedProducts}/>
        </div>
    );
};