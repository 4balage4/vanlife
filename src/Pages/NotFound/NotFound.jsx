import React from 'react'
import { Link } from 'react-router'
import Button from '../../components/Button'

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 error, page not found or does not exist, the creator Balazs was not able to create this page. </h1>
      <Link to="/"><Button
        className="back-home-button">
        Go back to the home page
        </Button>
      </Link>
    </div>
  )
}

export default NotFound
