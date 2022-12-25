import { useMemo } from "react";

export function useSelected(sortProducts, products) {
    const selectedProducts = useMemo(() => {
        return [...products].sort((product1, product2) => {
            if (product1.category === sortProducts.selected && product2.category !== sortProducts.selected) return -1;
            if (product1.category !== sortProducts.selected && product2.category !== sortProducts.selected) return 0;
            if (product1.category !== sortProducts.selected && product2.category === sortProducts.selected) return 1;
        });
    }, [sortProducts['selected'], products]);

    return selectedProducts; 
};

export function useSearch (sortProducts, products) {
    const selectedPosts = useSelected(sortProducts, products);

    const searchedAndSelectedProducts = useMemo(() => {
        return selectedPosts.filter(product => product.name.toLowerCase().trim().includes(sortProducts.search.toLowerCase().trim()));
    }, [sortProducts.search, selectedPosts]);
    
    return searchedAndSelectedProducts;
};