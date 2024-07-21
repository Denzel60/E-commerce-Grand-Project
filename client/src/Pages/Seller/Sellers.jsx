import { useEffect, useState } from "react";

function Sellers() {
    const [sellers, setSellers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            // setLoading(true)
            try {
                const response = await fetch(`http://localhost:3020/api/user/getSellers`, {
                    method: 'GET',
                    credentials: 'include'
                });
                const data = await response.json();

                if (data.success === true) {
                    setSellers(data.message);
                    // setLoading(false)
                }
                //     setError(true)
                //     setLoading(false)
                // }
            } catch (error) {
                console.log(error)
                // setError(true)
                // setLoading(false)
            }
        };

        fetchData();
    }, []);

    const updateSeller = (seller) => {
        console.log(seller)
    }

    const deleteSeller = (seller) => {
        console.log(seller)
    }

    return (
        <div>

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
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {
                    sellers.map((seller, index) => (
                        <tr key={index}>
                            <td>{seller.email}</td>
                            <td>{seller.firstName}</td>
                            <td>{seller.lastName}</td>
                            <td>{seller.phoneNumber}</td>
                            <td>{seller.role}</td>
                            <td>{seller.additionalPhoneNumber}</td>
                            <td>{seller.address}</td>
                            <td>{seller.region}</td>
                            <td>{seller.city}</td>
                            <td><button onClick={() => updateSeller(seller)}>Update</button></td>
                            <td><button onClick={() => deleteSeller(seller)}>Delete</button></td>
                        </tr>

                    ))
                }
            </table>



        </div>
    )
}

export default Sellers