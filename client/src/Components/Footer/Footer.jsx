import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <div className="social-icons">
                <h3><FaFacebookSquare /></h3>
                <h3><FaInstagramSquare /></h3>
                <h3><FaXTwitter /></h3>
                <h3><FaLinkedin /></h3>
            </div>
            <p>Copyright @{currentYear}. All rights reserved</p>
        </footer>
    )
}

export default Footer