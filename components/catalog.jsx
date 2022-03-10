import './catalog.css';
import Product from './product';
import DataService from '../services/dataService';
import {useEffect, useState} from 'react';

const Catalog = () => {

    let [products, setProducts] = useState([]);

    const loadCatalog = () => {
        console.log("Data Retrieved");
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
    };

    useEffect( () => {
        loadCatalog();
    } );

    return (<div className="catalog">
        <h1>Huzzah!</h1>
        <h2>Chex out our W@rezZZ!</h2>
        <h3>We have {products.length} available designs!</h3>
        {
            products.map(
                (prod) => (<Product key={prod._id} title={prod.title} price={prod.price}/>)
                )
            }
    </div>);

};

export default Catalog;