import { useState } from "react";
import useItemStore from "../../store/AddItemCart"
import { IoTrashBinSharp } from "react-icons/io5";

function Cart() {
    const cartItems = useItemStore((state) => state.cartItems)
    const removeItem = useItemStore((state) => state.deleteItemCart)
    const [order, setOrder] = useState({})
    const [error, setError] = useState()
    const [message, setMessage] = useState()

    const handleDeleteItem = (item) => {
        removeItem(item.id)
    }

    const handleOrder = async (item) => {
        setOrder({
            image: item.image,
            name: item.name,
            price: item.price,
            description: item.description,
            sellerId: item.sellerId,
        })
        console.log(order);
        try {
            const response = await fetch(`http://localhost:3020/api/order/createOrder`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order),
                credentials: 'include'
            })
            const data = await response.json()
            console.log(data);
            if (data.success === true) {
                setMessage("Created order successfully")
                setError(false)
            } else {
                setError("There was an error please place the order again")
                setMessage(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2>You have {cartItems.length} items in your Cart</h2>
            <h2>{error}</h2>
            <h2>{message}</h2>
            <div className="electronic-items">
                {
                    cartItems.map((item, i) => (
                        <div className="cart-items" key={i}>
                            <img src={item.image} alt="" />
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                            {/* <p>Description: {item.description}</p> */}
                            {/* <p>{item.sellerId}</p> */}
                            <button onClick={() => handleDeleteItem(item)}><IoTrashBinSharp /></button>
                            <button onClick={() => handleOrder(item)}>Order</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart