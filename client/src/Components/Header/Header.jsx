import useAuthStore from "../../store/AuthStore"
import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate();
    const setAuth = useAuthStore((state) => state.setAuth)

    const handleLogout = () => {
        setAuth(false);
        navigate("/login")
    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Header