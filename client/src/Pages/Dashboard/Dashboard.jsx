import useItemStore from '../../store/AddItemCart'

function Dashboard() {
    const addItemCart = useItemStore((state) => state.addItemCart)
    const cartItems = useItemStore((state) => state.cartItems)

    const electronics = [
        {
            name: 'TV',
            price: 1000,
            description: "Lorem ipsum dolor sit amet"
        },
        {
            name: 'Oven',
            price: 1000,
            description: "Lorem ipsum dolor sit amet"
        },
        {
            name: 'Watch',
            price: 1000,
            description: "Lorem ipsum dolor sit amet"
        },
        {
            name: 'Phone',
            price: 1000,
            description: "Lorem ipsum dolor sit amet"
        },
    ]

    const handleAddItem = (elect) => {
        addItemCart(
            {
                id: Math.ceil(Math.random() * 1000000),
                name: elect.name,
                price: elect.price,
                description: elect.description,
            }
        )
        console.log(cartItems)
    }
    return (
        <div>
            <div className="electronic-items">
                {electronics.map((elect, i) => (
                    <div className="items" key={i}>
                        <h1>{elect.name}</h1>
                        <p>{elect.price}</p>
                        <p>{elect.description}</p>
                        <button onClick={() => handleAddItem(elect)}>+</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard