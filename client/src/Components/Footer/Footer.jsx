import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import useCredentialsStore from '../../store/CredentialsStore';
import useAuthStore from '../../store/AuthStore';
import useAuthBuyerStore from '../../store/AuthBuyerStore';
import { useState } from 'react';

function Footer() {
    const Credentials = useCredentialsStore((state) => state.Credentials)
    const AuthBuyer = useAuthBuyerStore((state) => state.AuthBuyer)
    const Auth = useAuthStore((state) => state.Auth)
    const [request, setRequest] = useState([])
    const [id, setId] = useState()
    const currentYear = new Date().getFullYear()

    const handleRequest = async () => {
        setId(Credentials.id)
        setRequest({
            role: "request"
        })
        console.log(request)
        try {
            const response = await fetch(`http://localhost:3020/api/user/updateUserRole/${id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(request),
                credentials: 'include'
            })
            // console.log(response);
            const data = await response.json()
            console.log(data);
            if (data.success === true) {
                alert("Request sent successfully")
            } else {
                alert("Please try again")
            }
        } catch (error) {
            console.log(error)
        }
        // console.log(Credentials);
    }
    return (
        <footer>
            <div className="social-icons">
                <h3><FaFacebookSquare /></h3>
                <h3><FaInstagramSquare /></h3>
                <h3><FaXTwitter /></h3>
                <h3><FaLinkedin /></h3>

                <div>
                    {
                        Auth ?
                            <div>
                                {
                                    AuthBuyer ? <button onClick={handleRequest}>Request to be a seller</button> : null
                                }
                            </div> : null
                    }
                </div>
            </div>
            <p>Copyright @{currentYear}. All rights reserved</p>
        </footer >
    )
}

export default Footer