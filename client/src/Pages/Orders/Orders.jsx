import { useState, useEffect } from "react";

function Orders() {

    const [orders, setOrders] = useState([])
    const [id, setId] = useState()
    const [message, setMessage] = useState()
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3020/api/order/getBuyerOrders`, {
                    method: 'GET',
                    credentials: 'include'
                });
                const data = await response.json();

                if (data.success === true) {
                    // console.log(data);
                    setOrders(data.message);
                }
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    const handleDeleteOrder = async (product) => {
        setId(product.id)

        try {
            const response = await fetch(`http://localhost:3020/api/order/deleteOrder/${product.id}`, {
                method: 'DELETE',
                credentials: 'include'
            });
            const data = await response.json();

            if (data.success === true) {
                setMessage("Deleted Successfully")
                setError(false)
                setOrders(orders.filter((product) => product.id !== id))
            } else {
                setError("There was an Error")
                setMessage(false)
            }
        } catch (error) {
            console.log(error)
            setError(error)
        }
    }
    return (
        <div>
            <h3>Orders({orders.length})</h3>
            <h4 style={{ color: "red" }}>{error}</h4>
            <h4>{message}</h4>
            <div className="products">
                {
                    orders.map((product, i) => (
                        <div className="product" key={i}>
                            <div className="product-left">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="product-right">
                                <h4>Name: {product.name}</h4>
                                <p>Price: {product.price}</p>
                                <h4>Seller: {product.Seller}</h4>
                                <p>Description: {product.description}</p>
                                <p>Category: {product.category}</p>
                                <button onClick={() => handleDeleteOrder(product)}>Delete Order</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Orders