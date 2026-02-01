import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="page-container">
            <Header title="Cakes Store" />

            <main className="main-content">
                <p className='description-text'>
                    Welcome to our premium Cakes Store! We offer the finest selection of hand-crafted cakes
                    made with the best ingredients. From our famous Belgian Chocolate Dream to the
                    refreshing Strawberry Cloud, there's a perfect slice for everyone.
                </p>
                <p className='description-text'>
                    Explore our gallery to see all our delicious options and add your favorites to your cart.
                    We take pride in our traditional recipes and modern presentation.
                </p>
            </main>

            <Footer />
        </div>
    )
}

export default Home
