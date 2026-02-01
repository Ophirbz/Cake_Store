import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Header = (props) => {
    const { totalItems } = useCart();

    return (
        <header className="main-header">
            <h1 className="header-title">{props.title}</h1>
            <nav className="header-nav">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
                <NavLink to="/cart" className="nav-link">
                    Cart {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                </NavLink>
            </nav>
        </header>
    )
}
export default Header