import useItemStore from '../../store/AddItemCart'

function Dashboard() {
    const addItemCart = useItemStore((state) => state.addItemCart)
    const cartItems = useItemStore((state) => state.cartItems)

    const electronics = [
        {
            image: "https://res.cloudinary.com/dsqpytomn/image/upload/v1721374379/uahtyqsp4xyoym6r3tqe.jpg",
            name: 'TV',
            price: 1000,
            description: "Lorem ipsum dolor sit amet"
        },
        {
            image: "https://res.cloudinary.com/dsqpytomn/image/upload/v1721375991/yvtoqng5txrpvebaysgo.jpg",
            name: 'Oven',
            price: 1000,
            description: "Lorem ipsum dolor sit amet"
        },
        {
            image: "https://res.cloudinary.com/dsqpytomn/image/upload/v1721375322/xcij0klqbaha77asgj3c.jpg",
            name: 'Watch',
            price: 1000,
            description: "Lorem ipsum dolor sit amet"
        },
        {
            image: "https://res.cloudinary.com/dsqpytomn/image/upload/v1721374379/uahtyqsp4xyoym6r3tqe.jpg",
            name: 'Phone',
            price: 1000,
            description: "Lorem ipsum dolor sit amet"
        },
    ]

    const handleAddItem = (elect) => {
        addItemCart(
            {
                id: Math.ceil(Math.random() * 1000000),
                image: elect.image,
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
                        <img src={elect.image} alt="" />
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