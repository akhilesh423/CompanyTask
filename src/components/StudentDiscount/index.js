import './index.css'

const StudentDiscount = () => (
  <div className="student-discount-main-bg">
    <div className="student-discount-text">
      <div className="first-container">
        <div>
          <p className="discount-para">Get 20% off for student</p>
          <h1 className="discount-heading">Student discounts available.</h1>
          <p className="get-ready-text">Get ready for some fun in the sun!</p>
        </div>
        <ul className="first-container">
          <li className="discount-list">Lorem ipsum dolor sit amet</li>
          <li className="discount-list">quis natoque sit quam</li>
          <li className="discount-list">Eros non pellentesque elit</li>
          <li className="discount-list">tortor id euismod habitant</li>
          <li className="discount-list">Sed suspendisse id in ultrices</li>
        </ul>
      </div>
      <div className="second-container">
        <button className="explore-more-btn" type="button">
          Explore More
        </button>
      </div>
    </div>
    <div className="discount-image-container">
      <img
        className="discount-image"
        alt="discount"
        src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693574560/ccx85n0ylao5imodgngb.png"
      />
    </div>
  </div>
)

export default StudentDiscount
