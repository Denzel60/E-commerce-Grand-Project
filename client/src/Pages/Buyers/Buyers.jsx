import { useEffect, useState } from "react";

function Buyers() {
  const [buyers, setBuyers] = useState([])
  const [message, setMessage] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3020/api/user/getAllBuyers`, {
          method: 'GET',
          credentials: 'include'
        });
        const data = await response.json();

        if (data.success === true) {
          // console.log(data.message)
          setBuyers(data.message);
        }
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, []);

  const updateSeller = (buyer) => {
    console.log(buyer)
  }

  const deleteBuyer = async (buyer) => {
    try {
      const response = await fetch(`http://localhost:3020/api/user/deleteUser/${buyer.id}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      const data = await response.json();

      if (data.success === true) {
        setMessage("deleted successfully")
      } else {
        setMessage("Error Deleting")
      }
    } catch (error) {
      console.log(error)
      setMessage("Error deleting")
    }
  }

  return <div>

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
        <th>Update</th>
        <th>Delete</th>
      </tr>
      {
        buyers.map((buyer, index) => (
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
            <td><button onClick={() => updateSeller(buyer)}>Update</button></td>
            <td><button onClick={() => deleteBuyer(buyer)}>Delete</button></td>
          </tr>

        ))
      }
    </table>
    <p>{message}</p>
  </div>
}

export default Buyers;
