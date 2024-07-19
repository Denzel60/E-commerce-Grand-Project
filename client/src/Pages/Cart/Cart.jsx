import useItemStore from "../../store/AddItemCart"
import { IoTrashBinSharp } from "react-icons/io5";

function Cart() {
    const cartItems = useItemStore((state) => state.cartItems)
    const removeItem = useItemStore((state) => state.deleteItemCart)

    const handleDeleteItem = (item) => {
        removeItem(item.id)
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
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart