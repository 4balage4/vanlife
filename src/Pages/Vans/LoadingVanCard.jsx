import Button from '../../components/Button'

function LoadingVanCard() {

  const loadingHTML = (
    <div className='van-card'>
      <div className="loading-img content-loading" aria-live="polite"></div>
      <div className="van-card-text-container">
        <div className="van-card-name-btn">
          <p className="van-card-name content-loading">&nbsp;</p>
          <Button className={`van-card-button-rugged content-loading `}>
            &nbsp;
          </Button>
        </div>
        <p className="van-card-price content-loading">
          &nbsp;
          <br />
          <span>&nbsp;</span>
        </p>
      </div>
    </div>
    )

    const loadingPlaceholders = []

  for (let i = 0; i < 6; i++) {
     loadingPlaceholders.push(loadingHTML)
  }

  console.log(loadingPlaceholders)

  return (
    loadingPlaceholders
  );
}

export default LoadingVanCard;
