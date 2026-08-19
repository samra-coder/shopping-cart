export default function Cart() {


    return (
       <div className="container mt-4">
        <h1 className="mb-4">Shopping Cart</h1>
        <div className="container">
            <h2 className="mb-3">Your Cart</h2>
            <table className="table table-bordered align-middle">
                <thead className="table-light">
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Sub-Total</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Moblie</td>
                        <td>$80K</td>
                        <td>1</td>
                        <td>$80k</td>
                        <td><button className="btn btn-danger btn-sm">Remove</button></td>
                    </tr>
                </tbody>

            </table>
        </div>

    </div>
    )
}