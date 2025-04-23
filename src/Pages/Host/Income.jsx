import React from 'react'
import imgUrl from '../../assets/images/Screenshot 2025-04-23 113241.png'

function Income() {
  return (
    <div className="income-container">
      <div className="income-header">
        <h1>Income</h1>
        <p>Last <span className='income-span'>30 days</span></p>
        <h3>$2,260</h3>
      </div>
      <div className='income-graph'>
        {/* i add an image... */}
        <img src={imgUrl} alt="graph" />
      </div>
      <div className="income-transactions-container">
        <div className="income-trans-header">
          <h3>Your Transactions (3)</h3>
          <p>Last <span className='income-span'>30 days</span></p>
        </div>
        <div className="income-transaction">
          <h3>$720</h3>
          <p>1/5/25</p>
        </div>
        <div className="income-transaction">
          <h3>$550</h3>
          <p>3/2/25</p>
        </div>
        <div className="income-transaction">
          <h3>$940</h3>
          <p>10/6/25</p>
        </div>
      </div>

    </div>
  )
}

export default Income
