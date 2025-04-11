import React from 'react'
import Button from '../../components/Button'
import {Link} from 'react-router'

function VanCard({id, name, price, imageUrl, type}) {




  return (
    <div className='van-card'>
      <Link to={`/vans/${id}`} className='van-card-link'>
        <img src={imageUrl} alt={`van-${name}`}/>
        <div className="van-card-text-container">

        <div className="van-card-name-btn">
          <p className="van-card-name">{name}</p>
          <Button className={`van-card-button-${type}`}>{type}</Button>
        </div>
        <p className="van-card-price">${price}
          <br />
          <span>/day</span>
        </p>
        </div>
      </Link>
      </div>
  )
}

export default VanCard
