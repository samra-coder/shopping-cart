import { useCart } from "../context/CardContext";

export default function Carts(){
 const { cart, delcart , updcart, total} = useCart();

    return(
            <div className="container">
            <h2 className="mb-3">Your Cart</h2>
            
     { cart.length ===0 ? ( 
        <div className="alert alert-info">no items in the cart</div>
     ) : (
        <>
         <table className="table table-bordered align-middle">
                <thead className="table-light">
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Sub-Total</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {cart.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.price}K</td>     
                        <td style={{width:"100px"}}>
                            <input type="number" 
                            value={item.qty}
                             min="1" 
                             onChange={(e) => updcart(item.id, Number(e.target.value))}
                            className="form-control text-center" />
                        </td>
                        <td>{item.price *item.qty}K</td>
                        <td><button 
                        onClick={() => delcart(item.id)}
                         className="btn btn-outline-danger btn-sm">Remove</button></td>
                    </tr>  

                    ) )}
                    
                </tbody>

            </table>
            <div className="text-end fw-bold fs-5">Total: {total.toFixed(2)}K</div>
        </>
     )}
             
        </div>
    );
}