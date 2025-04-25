import { useState, useEffect} from "react";
import Loading from "../../components/Loading";

function Reviews() {
  const [loading, setLoading] = useState(true);
  //  I dont implement it to firestore.
  // I use this locally, did not want to make that many request to the firestore server...

// immitating a loading screen for the comments.
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false)
    }, 500)

    // I learned, to clean up after, however here it is not a problem. But better practice.
    return () => clearTimeout(timeOut)
  }, [])

  const reviewsData = [
    {
      rating: 4,
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
    {
      rating: 5,
      name: "Susan",
      date: "February 3, 2024",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "3",
    },
    {
      rating: 5,
      name: "Francis",
      date: "July 22, 2021",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci amet corrupti dolorem distinctio, sequi fugit porro veritatis excepturi blanditiis, ut ipsam id quae iure accusantium. Repudiandae vero itaque ad.",
      id: "4",
    },
    {
      rating: 5,
      name: "Paulina",
      date: "December 12, 2022",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatum magni ab quidem odio sed vero, expedita, quaerat neque rerum atque nesciunt accusamus. Expedita amet perferendis sapiente iure soluta voluptatum.",
      id: "5",
    },
    {
      rating: 5,
      name: "Robert",
      date: "December 12, 2022",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, distinctio placeat, iste repellendus modi velit quis architecto dolore aut aliquid eos alias sed blanditiis ad, commodi hic libero. Blanditiis, saepe.",
      id: "6",
    },
  ];

  const averageRating = (arr) => {
    const total = arr.reduce((acc, { rating }) => {
      return acc + rating;
    }, 0);
    return (total / arr.length).toFixed(1);
  };

  const ratingCount = reviewsData.reduce(
    (acc, { rating }) => {
      //  acc[rating] = (acc[rating] || 0) + 1;
      acc[rating] += 1;
      return acc;
    },
    { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  );

  function countRating(num, arr = reviewsData) {
    return ((ratingCount[num] / arr.length) * 100).toFixed(1);
  }

  const loadingDiv = (
    <div className="user-reviews-container loading-animation">
      <Loading />
    </div>
  );

  return (
    <div className="review-container">
      <div className="review-header-container">
        <h1>Your reviews</h1>
        <p>
          last <span>30 days</span>
        </p>
      </div>
      <div className="review-rating-container">
        <h3>{averageRating(reviewsData)}</h3>
        <p>⭐ overall rating</p>
      </div>
      <div className="review-rating-graph-container">
        <div className="review-score">
          <p>5 stars</p>
          <div className="line-container">
            <div
              className="review-line full"
              style={{ width: `${countRating(5)}%` }}
            ></div>
            <div
              className="review-line"
              style={{ width: `${100 - countRating(5)}%` }}
            ></div>
          </div>
          <p>{countRating(5)}%</p>
        </div>
        <div className="review-score">
          <p>4 stars</p>
          <div className="line-container">
            <div
              className="review-line full"
              style={{ width: `${countRating(4)}%` }}
            ></div>
            <div
              className="review-line"
              style={{ width: `${100 - countRating(4)}%` }}
            ></div>
          </div>
          <p>{countRating(4)}%</p>
        </div>
        <div className="review-score">
          <p>3 stars</p>
          <div className="line-container">
            <div
              className="review-line full"
              style={{ width: `${countRating(3)}%` }}
            ></div>
            <div
              className="review-line"
              style={{ width: `${100 - countRating(3)}%` }}
            ></div>
          </div>
          <p>{countRating(3)}%</p>
        </div>
        <div className="review-score">
          <p>2 stars</p>
          <div className="line-container">
            <div
              className="review-line full"
              style={{ width: `${countRating(2)}%` }}
            ></div>
            <div
              className="review-line"
              style={{ width: `${100 - countRating(2)}%` }}
            ></div>
          </div>
          <p>{countRating(2)}%</p>
        </div>
        <div className="review-score">
          <p>1 stars</p>
          <div className="line-container">
            <div
              className="review-line full"
              style={{ width: `${countRating(1)}%` }}
            ></div>
            <div
              className="review-line"
              style={{ width: `${100 - countRating(1)}%` }}
            ></div>
          </div>
          <p>{countRating(1)}%</p>
        </div>
      </div>
      <div className="user-reviews-container">
        <h3>Reviews ({reviewsData.length})</h3>
      {loading ? loadingDiv
      :
        reviewsData.map((review) => {
          return (
            <div className="review-content" key={review.id}>
              <div className="user-review-header">
                <p className="review-name">{review.name}</p>
                <p>{review.date}</p>
                <p>({review.rating}⭐)</p>
              </div>
              <p>{review.text}</p>
              <div className="review-comment-line"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reviews;
