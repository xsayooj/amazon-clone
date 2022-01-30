import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import {getSubtotal} from "./reducer";

function Subtotal(){
    const [{basket},dispatch] = useStateValue();

    return <div className="subtotal">
        <CurrencyFormat renderText={(value)=>(
            <>
            <p>Subtotal ({basket.length} item):<strong>{`${value}`}</strong> </p>
            <small className="subtotal_gift">
                <input type="checkbox" />This order contains a gift
            </small>
            </>
        )} 
        decimalScale={2}
        value={getSubtotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
        <button>Proceed to Checkout</button>
    </div>
}

export default Subtotal;