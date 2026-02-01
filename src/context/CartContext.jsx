import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        const itemExists = cartItems.find(item => item.id === product.id)
        if (itemExists) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ))
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }
    }

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    const updateQuantity = (id, amount) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + amount
                return { ...item, quantity: newQty > 0 ? newQty : 1 }
            }
            return item
        }))
    }

    const totalItems = cartItems.length
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            totalItems,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
