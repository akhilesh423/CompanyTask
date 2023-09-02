import './index.css'

const TopSection = () => (
  <div className="top-section-bg">
    <div className="text-container-top-section">
      <div>
        <div className="heading-container">
          <p className="discover-text">Discover the beauty of the tropics</p>
          <h1 className="top-section-head">
            Tropical Destinations{' '}
            <span className="span-top-section">For Student</span>
          </h1>
          <p className="lang-top-section ">
            Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
            integer rutrum nisi. A nec nisl vitae
          </p>
        </div>

        <button className="sign-up-btn" type="button">
          SIGN UP
        </button>
      </div>
    </div>
    <div className="image-container">
      <img
        className="top-section-img"
        alt="profile-img"
        src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693558966/cx31rhsr0s28i5o0bs7m.png"
      />
    </div>
  </div>
)

export default TopSection
