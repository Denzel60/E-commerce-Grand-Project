import './Home.css'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3020/api/product/getAllProductsWithoutId`, {
                    method: 'GET',
                    credentials: 'include'
                });
                const data = await response.json();

                if (data.success === true) {
                    // console.log(data);
                    setProducts(data.message);
                }
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    const handleNavigate = () => {
        navigate("/login")
    }
    return (
        <div>
            <masonry-layout cols="4" maxcolwidth="400" gap="10" debounce="500">
                {products.map((elect, i) => (
                    <div className="items" key={i}>
                        <img src={elect.image} alt="" />
                        <h4>Name: {elect.name}</h4>
                        {/* <p>{elect.id}</p> */}
                        <p>Price: {elect.price}</p>
                        {/* <p>Description: {elect.description}</p> */}
                        <p>Seller: {elect.Seller}</p>
                        {/* <p>SellerId: {elect.sellerId}</p> */}
                        <button onClick={handleNavigate}>+</button>
                    </div>
                ))}
            </masonry-layout>
        </div>
    )
}

export default Home