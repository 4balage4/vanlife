import React from 'react'

function Reviews() {

const reviewsData = [
  {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
  },
  {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
  },
]
  return (
    <div className="review-container">
      <div className="review-header-container">
        <h1>Your reviews</h1>
        <p>last <span>30 days</span></p>
      </div>
      <div className="review-rating-container">
        <h3>5.0</h3>
        <p>⭐ overall rating</p>
      </div>
      <div className="review-rating-graph-">
        <div className="review-score">
          <p>5 stars</p>
          <div className="review-line full"></div>
          <p>100%</p>
        </div>
        <div className="review-score">
          <p>4 stars</p>
          <div className="review-line"></div>
          <p>0%</p>
        </div>
        <div className="review-score">
          <p>3 stars</p>
          <div className="review-line"></div>
          <p>0%</p>
        </div>
        <div className="review-score">
          <p>2 stars</p>
          <div className="review-line"></div>
          <p>0%</p>
        </div>
        <div className="review-score">
          <p>1 stars</p>
          <div className="review-line"></div>
          <p>0%</p>
        </div>
        </div>
        <div className="review-reviews-container">
          <h3>Reviews ({reviewsData.length})</h3>
          {reviewsData.map((review) => {
            return (

              <div className="review-content">
            <div className="user-review-header">
              <p className="review-name">{review.name}</p>
              <p>{review.date}</p>
            </div>
            <p>{review.text}</p>
            <div className="review-comment-line"></div>
          </div>
        )
          })}
        </div>
    </div>
  )
}

export default Reviews
