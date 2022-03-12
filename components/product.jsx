import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
    return (<div className="product">
        <img src="https://picsum.photos/200/300" alt="product img"></img>
        <h2>{props.title}</h2> 
        <label className="price">{props.price}</label>
        <label className="total">$Total</label>
        <QuantityPicker></QuantityPicker>
        <button className="btn btn-primary btn-sm">Add to Cart</button>
    </div>);
};

export default Product;

