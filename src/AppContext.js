import React, { useState, createContext, useEffect } from 'react'

export const AppContext = createContext()

export const AppProvider = props => {

    // const [data, setData] = useState([
    //     {"name": "drink", "label": "Mountain Dew", "value": 0, "id": 1},
    //     {"name": "drink", "label": "Desperados", "value": 0, "id": 2},
    //     {"name": "drink", "label": "Jack Daniels", "value": 0, "id": 3}
    // ])
    // const [soda, setSoda] = useState(1.8)
    // const [beer, setBeer] = useState(2.583)
    // const [alcohol, setAlcohol] = useState(3.35)
    // const initialSoda = () => Number(localStorage.getItem('soda')) || 0
    // const initialBeer = () => Number(localStorage.getItem('beer')) || 0
    // const initialAlcohol = () => Number(localStorage.getItem('alcohol')) || 0
    // const initialTotal = () => Number(localStorage.getItem('total')) || 0
    //const initialValue = () => Number(localStorage.getItem('value')) || 0
    // const [valueSoda, setValueSoda] = useState(0)
    // const [valueBeer, setValueBeer] = useState(0)
    // const [valueAlcohol, setValueAlcohol] = useState(0)

    // const [soda, setSoda] = useState(initialSoda)
    // const [beer, setBeer] = useState(initialBeer)
    // const [alcohol, setAlcohol] = useState(initialAlcohol)
    // const [total, setTotal] = useState(initialTotal)
    //const [value, setValue] = useState(initialValue)
    
    // useEffect(()=> {
    //     localStorage.setItem('soda', soda)
    //     localStorage.setItem('beer', beer)
    //     localStorage.setItem('alcohol', alcohol)
    //     localStorage.setItem('total', total)
    //     //localStorage.setItem('value', value)
    // }, [soda, beer, alcohol, total])

    // useEffect(() => {
    //     setSoda(0)
    // }, [])


    return (
        <>
            <AppContext.Provider value={{ 
                // data, setData, 
                // soda, setSoda, 
                // beer, setBeer, 
                // alcohol, setAlcohol, 
                // total, setTotal, 
                // valueSoda, setValueSoda,
                // valueBeer, setValueBeer,
                // valueAlcohol, setValueAlcohol,
             }}>
                {props.children}
            </AppContext.Provider>
        </>
    )

}