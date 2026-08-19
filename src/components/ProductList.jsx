import ProductCard from "./ProductCard"

const product =[
    {id:1,name:"laptop", price:80000},
   
]

export default function ProductList() {

    return (
        <div className="row">
              {product.map((p)=>(
            <div key={p.id} className="col-md-3 mb-4">
                <ProductCard product={p}/>
            </div>
            ))}
        </div>
    )
}