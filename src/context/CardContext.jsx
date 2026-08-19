import { createContext, useContext, useState } from "react";

const CardContext=createContext();
export const CardProvider= ({children}) => {

    const [card, setCard]=useState([]);

    //add to cart
    const addTocart=(product)=>{
        setCard((prev) => {
           const existng=prev.find((item)=> item.id===product.id)
           if(existng){
            return prev.map((item) => item.id===product.id? {...item, qty: item.qty+1} : item)
           }
           return [...prev, {...product, qty:1}]
        })
    }

    return(
        <CardContext.Provider value={{card, setCard, addTocart}}>
            {children}
        </CardContext.Provider>
    )
}
//custom hook
export const useCart=() => useContext(CardContext)