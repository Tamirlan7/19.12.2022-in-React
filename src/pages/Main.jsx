import React, { useEffect, useMemo, useState } from "react";
import Server from "../API/Server";
import Products from '../components/Products';
import Sort from "../components/Sort";
import { useFetch } from "../hooks/useFetch";
import { useSearch, useSelected } from "../hooks/useSort";
import '../styles/Main.css';
import Loader from "../UI/Loader/Loader";

export default function Main () {
    const [sortProducts, setSortProducts] = useState({selected: '', search: ''});
    const [products, setProducts] = useState([]);

    const [getProducts, isLoading, ProductsError] = useFetch(() => {
        Server.getProducts().then(products => setProducts(products));        
    });

    const sortedAndSearchedProducts = useSearch(sortProducts, products);

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <div className="main">
            <Sort selected={sortProducts.selected} search={sortProducts.search} setSortProducts={setSortProducts} />
            {isLoading 
            ? <Loader />
            : <Products products={sortedAndSearchedProducts}/>
            }
        </div>
    );
};