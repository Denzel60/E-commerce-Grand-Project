import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import useCredentialsStore from '../../store/CredentialsStore';
import useAuthStore from '../../store/AuthStore';
import { useState } from 'react';

function Footer() {
    const Credentials = useCredentialsStore((state) => state.Credentials)
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
            console.log(response);
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

                {
                    Auth ? <button onClick={handleRequest}>Become A Seller</button> : null
                }
            </div>
            <p>Copyright @{currentYear}. All rights reserved</p>
        </footer>
    )
}

export default Footer