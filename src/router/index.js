import Main from "../pages/Main";
import Basket from "../pages/Basket";
import ProductDetails from "../pages/ProductDetails";

const routes = [
    {
        path: '/',
        element: <Main />,
        exact: true
    },
    {
        path: '/basket',
        element: <Basket />,
        exact: true
    },
    {
        path: '/details',
        element: <ProductDetails />,
        exact: true
    }
]

export default routes