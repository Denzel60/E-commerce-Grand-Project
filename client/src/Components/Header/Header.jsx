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
                    <div className='header'>
                        <div className="search">
                            <input type="text" placeholder='Search Product, Brand, Category' name="" id="" />
                            <button>Search</button>
                        </div>
                        <ul>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/orders">Orders</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <button onClick={handleLogout}>Logout</button>
                        </ul>
                    </div>
                    :
                    <div className="header">
                        <ul>
                            <li> <Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </ul>
                    </div>
            }
        </header>
    )
}

export default Header