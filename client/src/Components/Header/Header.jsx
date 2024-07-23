import './Header.css'
import useAuthStore from "../../store/AuthStore"
import useCredentialsStore from '../../store/CredentialsStore';
import useItemStore from '../../store/AddItemCart';
import useAuthAdminStore from '../../store/AuthAdminStore';
import useAuthSellerStore from '../../store/AuthSellerStore';
import useAuthBuyerStore from '../../store/AuthBuyerStore';
import { useNavigate, Link } from "react-router-dom"
import { IoMdCart } from "react-icons/io";

function Header() {
    const navigate = useNavigate();
    const Auth = useAuthStore((state) => state.Auth)
    const setAuth = useAuthStore((state) => state.setAuth)
    const AuthBuyer = useAuthBuyerStore((state) => state.AuthBuyer)
    const AuthSeller = useAuthSellerStore((state) => state.AuthSeller)
    const Credentials = useCredentialsStore((state) => state.Credentials)
    const cartItems = useItemStore((state) => state.cartItems)
    const AuthAdmin = useAuthAdminStore((state) => state.AuthAdmin)
    const setAuthAdmin = useAuthAdminStore((state) => state.setAuthAdmin)
    const setAuthSeller = useAuthSellerStore((state) => state.setAuthSeller)
    const setAuthBuyer = useAuthBuyerStore((state) => state.setAuthBuyer)

    const handleLogout = () => {
        setAuthAdmin(false)
        setAuthSeller(false)
        setAuthBuyer(false)
        setAuth(false)
        navigate("/login")
    }
    return (
        <header>
            {
                Auth ?
                    <div className='header'>
                        {
                            AuthBuyer
                                ? <div className='header'>
                                    <div className="search">
                                        <input type="text" placeholder='Search Product, Brand, Category' name="" id="" />
                                        <button>Search</button>
                                    </div>

                                    <ul>
                                        <li><Link to="/dashboard">Dashboard</Link></li>

                                        <li><Link to="/profile">Profile</Link></li>
                                        <li>Buyer</li>
                                        <li>{Credentials.firstName}</li>
                                        <li><Link to="/cart"><IoMdCart /></Link><span className='cartCount'>{cartItems.length}</span></li>

                                        <button onClick={handleLogout}>Logout</button>
                                    </ul>
                                </div> : null
                        }
                        {
                            AuthSeller ? <div>
                                <ul>
                                    <li><Link to="/orders">Orders</Link></li>
                                    <li><Link to="/seller/products">My Products</Link></li>
                                    <li><Link to="/AllProducts">All Products</Link></li>
                                    <li><Link to="/createProducts">Create Products</Link></li>
                                    <li>Seller</li>

                                    <button onClick={handleLogout}>Logout</button>
                                </ul>
                            </div> : null
                        }
                        {
                            AuthAdmin ?
                                <div>
                                    <ul>
                                        <li><Link to="/admin/sellers">Sellers</Link></li>
                                        <li><Link to="/admin/buyers">Buyers</Link></li>
                                        <li><Link to="/AllProducts">All Products</Link></li>
                                        <li><Link to="/profile">Profile</Link></li>
                                        <li>Admin</li>
                                        <button onClick={handleLogout}>Logout</button>
                                    </ul>
                                </div> : null
                        }
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
export default Header;

