import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({
    id,
    title,
    image,
    price,
    rating
}) {
    const [, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        })
    }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
            <strong>$</strong>
            <small>{price}</small>
        </p>
        <div className="checkoutProduct__rating">
            {
                Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
            }
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
