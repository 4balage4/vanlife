import React from 'react'
import Vans from '../Host/Vans/Vans'

function Dashboard() {
  return (
    <div className="dashboard-container">
        <div className="dash-header-container">
          <div className="dash-header">
            <h1>Welcome!</h1>
            <div className="dash-header-text">
              <p>Income last <span>30 days</span></p>
              {/* <p>Details</p> */}
            </div>
            <h2>$2,260</h2>
          </div>
          <div className="dash-review">
            <div className="dash-review-score">
            <h3>Review Score</h3>
            <p>⭐ <span>5.0</span>/5</p>
            </div>
            {/* <p>Details</p> */}
          </div>
          </div>
            <Vans />
    </div>

  )
}

export default Dashboard
