import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'
import products from '../Data/cakeCards.json'

const Gallery = () => {
    return (
        <div className="page-container">
            <Header title="Our Products" />

            <main className="main-content">
                <div className="products-grid">
                    {products.map(product => (
                        <Card
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            ingredients={product.ingredients}
                            calories={product.calories}
                        />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Gallery
