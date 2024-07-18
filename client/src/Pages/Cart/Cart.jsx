import useItemStore from "../../store/AddItemCart"

function Cart() {
    const cartItems = useItemStore((state) => state.cartItems)
    return (
        <div>
            <div className="electronic-items">
                {cartItems.map((item, i) => (
                    <div className="items" key={i}>
                        <h1>{item.name}</h1>
                        <p>{item.price}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart