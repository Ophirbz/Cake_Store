import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

    return (
        <div className="page-container">
            <Header title="Shopping Cart" />
            <main className="main-content">
                <div className="cart-modern">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <div className="empty-icon">🛒</div>
                            <h3>Your cart is empty</h3>
                            <p>Looks like you haven't added any cakes yet.</p>
                        </div>
                    ) : (
                        <div className="cart-content">
                            <div className="cart-items-list">
                                {cartItems.map(item => (
                                    <div key={item.id} className="cart-item-modern">
                                        <div className="cart-item-image">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="cart-item-info">
                                            <h3>{item.name}</h3>
                                            <p className="item-price">${item.price}</p>
                                        </div>
                                        <div className="cart-item-controls">
                                            <div className="quantity-selector">
                                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                            </div>
                                            <button
                                                className="remove-btn"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="cart-summary">
                                <h2>Order Summary</h2>
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <hr />
                                <div className="summary-row total">
                                    <span>Total</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <button className="checkout-btn">Proceed to Checkout</button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Cart
