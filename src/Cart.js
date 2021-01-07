import React, { useState } from 'react'
import './App.css'

const Cart = () => {

    const elements =  [
        {name: "soda", label: "Mountain Dew", id: 1, price: 1.80},
        {name: "beer", label: "Desperados", id: 2, price: 2.5833},
        {name: "alcohol", label: "Jack Daniels", id: 3, price: 3.35}
    ];
    const defaultValues = {soda: 0, beer: 0, alcohol: 0};
    const [values, setValues] = useState(defaultValues);

    const handleSubmit = e => {
        e.preventDefault()
    }

    const itemTotal = (qty, price) => {
        return (qty * price);
    }

    const total = () => {
        return elements
            .map(element => itemTotal(values[element.name], element.price))
            .reduce((acc,v) => acc + v, 0)
            .toFixed(2);
    }

    const handleOnChange = e => {
        setValues({...values, [e.target.name]: e.target.value});
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="container">
            <ul>
                {elements.map(item => 
                    <li 
                        className="col"
                        key={item.id}
                    >
                    <label 
                        id={item.id} 
                        htmlFor={item.id}
                    >
                     <span>
                        {item.label}
                    </span>
                    </label>
                    <input
                        type="number"
                        id={item.id}
                        min="0"
                        value={values[item.name]}
                        name={item.name}
                        onChange={handleOnChange}
                        required
                    />
                    <span className="value">
                        ${(values[item.name] * item.price ).toFixed(2)}
                    </span>
                    </li>
                )}
            </ul>
            <div className="col-footer">
                <span className="total">$ {total()}</span>
                <span onClick={() => setValues(defaultValues)}>Clear</span>
                <button type="submit">Check Out</button>
            </div>
        </div>
    </form>
    )
}

export default Cart;