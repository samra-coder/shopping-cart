import { useCart } from "../context/CardContext"

export default function ProductCard({product}){

    const { addTocart} =useCart()

    return (
        <div className="card shadow-sm h-100 text-center">
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">${product.price}</p>
                        <button 
                        onClick={()=>addTocart(product)}
                        className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
    )
}