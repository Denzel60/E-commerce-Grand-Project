import { useState } from "react";
import useItemStore from "../../store/AddItemCart"
import { IoTrashBinSharp } from "react-icons/io5";

function Cart() {
    const cartItems = useItemStore((state) => state.cartItems)
    const removeItem = useItemStore((state) => state.deleteItemCart)
    const [order, setOrder] = useState({})

    const handleDeleteItem = (item) => {
        removeItem(item.id)
    }

    const handleOrder = async (item) => {
        setOrder({
            image: item.image,
            name: item.name,
            price: item.price,
            decription: item.description,
            sellerId: Math.ceil(Math.random() * 1000000),
        })
        try {
            const response = await fetch(`http://localhost:3020/api/order/createOrder`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order),
                credentials: 'include'
            })
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2>You have {cartItems.length} items in your Cart</h2>
            <div className="electronic-items">
                {
                    cartItems.map((item, i) => (
                        <div className="items" key={i}>
                            <img src={item.image} alt="" />
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
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