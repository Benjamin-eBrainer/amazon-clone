import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg" alt="Home Image" />

      <div className="home__row">
        <Product 
            id="12321341"
            title="The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product 
            id="49538094"
            title="Kenwood kMix Stand Mixer for B"
            price={239.96}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        </div>

        <div className="home__row">
        <Product 
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product 
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SL_.jpg"
        />
        <Product 
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        </div>

        <div className="home__row">
        <Product 
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Monitor - Super Ultra Wide Dual WQHD 5120 x 1440' Curve"
            price={199.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L_.jpg"
        />
        </div>
    </div>
  )
}

export default Home
