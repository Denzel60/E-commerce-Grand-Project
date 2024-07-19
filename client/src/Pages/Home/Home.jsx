import './Home.css'
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();

    const electronics = [
        {
            image: "https://res.cloudinary.com/dsqpytomn/image/upload/v1721374379/uahtyqsp4xyoym6r3tqe.jpg",
            name: 'TV',
            price: 1000,
            description: "Lorem ipsum dolor sit amet"
        },
        {
            image: "https://res.cloudinary.com/dsqpytomn/image/upload/v1721374379/uahtyqsp4xyoym6r3tqe.jpg",
            name: 'Oven',
            price: 1000,
            description: "Lorem ipsum dolor sit amet"
        },
        {
            image: "https://res.cloudinary.com/dsqpytomn/image/upload/v1721374379/uahtyqsp4xyoym6r3tqe.jpg",
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

    const handleAddItem = () => {
        navigate("/login")
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

export default Home