import './index.css'

const CardsSection = () => (
  <div className="class-section-bg-container">
    <div className="responsive-container">
      <div className="cards-container">
        <div className="card">
          <div className="card-media">
            <div>
              <img
                className="avatar-img"
                alt="avatar"
                src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693561260/avl1cddopxt84ghohii7.png"
              />
            </div>
            <div className="media-content">
              <h2 className="text-content-head">Jenny Wilson</h2>
              <p className="text-content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-media">
            <div>
              <img
                className="avatar-img"
                alt="avatar"
                src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693562440/hq4qvygpz33eouvigz7b.png"
              />
            </div>
            <div className="media-content">
              <h2 className="text-content-head">Jenny Wilson</h2>
              <p className="text-content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-media">
            <div>
              <img
                className="avatar-img"
                alt="avatar"
                src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693562476/ll2ugxxgbrprn6hvklee.png"
              />
            </div>
            <div className="media-content">
              <h2 className="text-content-head">Jenny Wilson</h2>
              <p className="text-content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="responsive-container">
      <div className="tropic-responsive-container">
        <div className="tropic-adventure-container">
          <div className="tropic-top-container">
            <h3 className="tropic-heading">
              Tropical Adventure{' '}
              <span className="span-tropic">for Students.</span>
            </h3>
            <p className="text-student-vacation">
              Student Tropical Vacation: Relax and Recharge
            </p>

            <ul className="tropic-list-container">
              <li className="tropic-list-item">Lorem ipsum dolor sit amet</li>
              <li className="tropic-list-item">Massa quis natoque sit quam</li>
              <li className="tropic-list-item">Eros non pellentesque elit</li>
              <li className="tropic-list-item">
                tortor id euismod habitant Sed
              </li>
              <li className="tropic-list-item"> suspendisse id in ultrices</li>
            </ul>
          </div>
          <button className="explore-more-btn" type="button">
            Explore More
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default CardsSection
