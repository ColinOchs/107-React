import "./quantityPicker.css";
import{useState} from 'react';

const QuantityPicker = () => {
    let [quantity, setQuantity] = useState(0);

    const handleDecrease= () => {
        console.log('thats enough');
        if(quantity>0)
        setQuantity(quantity-1);
    }
   const handleIncrease = () => {
       console.log("More! More! More!");
       setQuantity(quantity+1);
   }

    return(<div className='quantityPicker'>
        <button className="btn btn-outline-primary btn btn-info btn-sm" onClick = {handleDecrease}>-</button>
        <label> {quantity} </label>
        <button className="btn btn-outline-primary btn btn-info btn-sm" onClick={handleIncrease}>+</button>
    </div>);
};

export default QuantityPicker;