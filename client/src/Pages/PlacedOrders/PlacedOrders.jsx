import { useEffect, useState } from "react";

function PlacedOrders() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3020/api/order/getSellerOrders`, {
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

    // const handleAddItem = (elect) => {
    // }
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
                        {/* <button onClick={() => handleAddItem(elect)}>+</button> */}
                    </div>
                ))}
            </masonry-layout>
        </div>
    )
}

export default PlacedOrders