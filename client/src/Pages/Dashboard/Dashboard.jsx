import useItemStore from '../../store/AddItemCart'
import { useEffect, useState } from 'react'
import "https://unpkg.com/@appnest/masonry-layout?module";

function Dashboard() {
    const addItemCart = useItemStore((state) => state.addItemCart)
    // const cartItems = useItemStore((state) => state.cartItems)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3020/api/product/getAllProducts`, {
                    method: 'GET',
                    credentials: 'include'
                });
                const data = await response.json();

                if (data.success === true) {
                    console.log(data);
                    setProducts(data.message);
                }
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    const handleAddItem = (elect) => {
        addItemCart(
            {
                id: elect.id,
                image: elect.image,
                name: elect.name,
                price: elect.price,
                description: elect.description,
                sellerId: elect.sellerId
            }
        )
        // console.log(cartItems)
    }
    return (
        <div>
            <masonry-layout cols="4" maxcolwidth="400" gap="10" debounce="500">
                {products.map((elect, i) => (
                    <div className="items" key={i}>
                        <img src={elect.image} alt="" />
                        <h4>Name: {elect.name}</h4>
                        <p>{elect.category}</p>
                        <p>Price: {elect.price}</p>
                        {/* <p>Description: {elect.description}</p> */}
                        <p>Seller: {elect.Seller}</p>
                        {/* <p>SellerId: {elect.sellerId}</p> */}
                        <button onClick={() => handleAddItem(elect)}>+</button>
                    </div>
                ))}
            </masonry-layout>
        </div>
    )
}

export default Dashboard