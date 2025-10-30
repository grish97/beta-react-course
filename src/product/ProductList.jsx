import { Product } from "./Product";

const products = [{}, {}, {}];

export const ProductList = () => {
    const [products, setProducts] = useState(products);

    return products.map((product) => <Product key={product.id} />)
};