import { createContext, useContext, useEffect, useState } from "react";

const CardContext=createContext();
export const CardProvider= ({children}) => {

    const [cart, setCart]=useState( () => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    useEffect(() => {
     localStorage.setItem("cart", JSON.stringify(cart));
    },[cart]);


    //add to cart
    const addTocart=(product)=>{
        setCart((prev) => {
           const existng=prev.find((item)=> item.id===product.id)
           if(existng){
            return prev.map((item) => item.id===product.id? {...item, qty: item.qty+1} : item)
           }
           return [...prev, {...product, qty:1}]
        })
    }

    //delete product from cart
    const delcart=(id)=>{
        setCart((prev) => prev.filter((item) => item.id!==id))
    }

    //update qty in cart
    const updcart= (id,qty) => {
        setCart((prev) => prev.map((item) => (item.id===id ? {...item, qty} : item ))
    )
    }

    // sum total
    const total= cart.reduce((sum,item) => sum + item.price* item.qty, 0)

    

    return(
        <CardContext.Provider value={{cart, addTocart, delcart, updcart, total}}>
            {children}
        </CardContext.Provider>
    )
}
//custom hook
export const useCart = () => useContext(CardContext);