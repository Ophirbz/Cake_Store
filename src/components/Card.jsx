import React from 'react'
import { useCart } from '../context/CartContext'

const Card = (props) => {
    const { addToCart } = useCart()
    const { id, image, name, price, ingredients, calories } = props

    return (
        <div className="cake-card">
            <div className="cake-image-container">
                <img src={image} alt={name} className="cake-image" />
            </div>

            <div className="cake-info">
                <h3 className="cake-name">{name}</h3>
                <p className="cake-price">${price}</p>

                <div className="cake-details">
                    <p><strong>Ingredients:</strong> {ingredients}</p>
                    <p><strong>Calories:</strong> {calories} kcal</p>
                </div>

                <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart({ id, image, name, price })}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Card
