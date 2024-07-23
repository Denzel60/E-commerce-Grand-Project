import { useEffect, useState } from "react";

function BuyerRequest() {

    const [BuyerRequests, setBuyerRequests] = useState([])
    const [message, setMessage] = useState()
    const [request, setRequest] = useState({})
    const [id, setId] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3020/api/user/getRequestBuyers`, {
                    method: 'GET',
                    credentials: 'include'
                });
                const data = await response.json();

                if (data.success === true) {
                    console.log(data.message)
                    setBuyerRequests(data.message);
                }
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    const acceptRequest = async (buyer) => {
        setId(buyer.id);
        setRequest({
            role: "seller"
        })
        try {
            const response = await fetch(`http://localhost:3020/api/user/updateUserRole/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(request),
                credentials: 'include'
            })
            const data = await response.json()
            console.log(data);

            if (data.success === true) {
                setMessage("Approval was successful")
                setBuyerRequests(BuyerRequests.filter(buyer => buyer.id !== id))
            } else {
                setMessage("Approval was unsuccessful")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h2>Buyers</h2>
            <table>
                <tr>
                    <th>Email</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Phone number</th>
                    <th>Role</th>
                    <th>Addtional Phone Number</th>
                    <th>Address</th>
                    <th>Region</th>
                    <th>City</th>
                    <th>Request</th>
                </tr>
                {
                    BuyerRequests.map((buyer, index) => (
                        <tr key={index}>
                            <td>{buyer.email}</td>
                            <td>{buyer.firstName}</td>
                            <td>{buyer.lastName}</td>
                            <td>{buyer.phoneNumber}</td>
                            <td>{buyer.role}</td>
                            <td>{buyer.additionalPhoneNumber}</td>
                            <td>{buyer.address}</td>
                            <td>{buyer.region}</td>
                            <td>{buyer.city}</td>
                            <td><button onClick={() => acceptRequest(buyer)}>Accept Request</button></td>
                        </tr>

                    ))
                }
            </table>
            <p>{message}</p>
        </div>
    )
}

export default BuyerRequest