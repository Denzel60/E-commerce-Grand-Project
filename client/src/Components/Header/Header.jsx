import './Header.css'
import useAuthStore from "../../store/AuthStore"
import { useNavigate, Link } from "react-router-dom"

function Header() {
    const navigate = useNavigate();
    const Auth = useAuthStore((state) => state.Auth)
    const setAuth = useAuthStore((state) => state.setAuth)

    const handleLogout = () => {
        setAuth(false);
        navigate("/login")
    }
    return (
        <header>
            {
                Auth ?
                    <ul>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/orders">Orders</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <button onClick={handleLogout}>Logout</button>
                    </ul>
                    :
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
            }
        </header>
    )
}

export default Header