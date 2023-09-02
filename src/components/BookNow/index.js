import './index.css'

const BookNow = () => (
  <div className="book-now-section-container">
    <div className="book-now-image-container">
      <img
        className="book-now-image"
        alt="book now"
        src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693575605/rzc1nbmg1yablspvlmid.png"
      />
    </div>
    <div className="book-now-card-container">
      <div>
        <h4 className="book-now-text">Book Now</h4>
        <p className="book-now-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <form className="form">
        <div className="input-container">
          <label htmlFor="city" className="label-text">
            CITY
          </label>
          <input id="city" className="block-level-input" />
        </div>
        <div className="inline-inputs-container">
          <div className="input-container-inline-1">
            <label htmlFor="city" className="label-text">
              Arrival
            </label>
            <input id="city" className="inline-inputs" />
          </div>
          <div className="input-container-inline-2">
            <label htmlFor="city" className="label-text">
              Departure
            </label>
            <input id="city" className="inline-inputs" />
          </div>
        </div>
        <div className="inline-inputs-container">
          <div className="input-container-inline-1">
            <label htmlFor="city" className="label-text">
              Arrival
            </label>
            <div className="plus-minus-container">
              <div className="button-container">
                <button className="counter-button" type="button">
                  +
                </button>
              </div>
              <div className="count-container">
                <p>4</p>
              </div>
              <div className="button-container">
                <button className="counter-button" type="button">
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="input-container-inline-2">
            <label htmlFor="city" className="label-text">
              Arrival
            </label>
            <div className="plus-minus-container">
              <div className="button-container">
                <button className="counter-button" type="button">
                  +
                </button>
              </div>
              <div className="count-container">
                <p>4</p>
              </div>
              <div className="button-container">
                <button className="counter-button" type="button">
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="book-now-button">
          Book Now
        </button>
      </form>
    </div>
  </div>
)

export default BookNow
