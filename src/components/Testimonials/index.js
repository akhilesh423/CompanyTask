import './index.css'

const Testimonials = () => (
  <div className="testimonials-bg-container">
    <div className="testimonials-whole-container">
      <h1 className="testimonail-heading">Testimonials</h1>
      <div className="testimonials-details-container">
        <div className="testimonial-profile">
          <img
            className="avatar"
            alt="avatar"
            src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693673039/en3hhlzl45jmzqbdspzj.png"
          />
          <p className="profile-name">Corey Korsgaard</p>
          <hr className="line" />
          <p className="profile-description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="testimonial-profile">
          <img
            alt="avatar"
            src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693673568/evauy5zreacv2njfidao.png"
          />
          <p className="profile-name">Jakob Aminoff</p>
          <hr className="line" />
          <p className="profile-description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="testimonial-profile">
          <img
            alt="avatar"
            src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693673606/okf4exjrerduouw3xwzq.png"
          />
          <p className="profile-name">Carla Press</p>
          <hr className="line" />
          <p className="profile-description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </div>
    <div className="last-section">
      <div>
        <p className="last-heading">
          Student Special: Discounted rates on tropical getaways!
        </p>
        <p className="last-para">
          Let’s embody your beautiful ideas together, simplify the way you
          visualize your next big things.
        </p>
      </div>
      <div className="whole-links-container">
        <div className="legal-conditions-container">
          <p className="each-condition">Privacy Policy</p>
          <p className="each-condition">Terms of Use</p>
          <p className="each-condition">Sales and Refunds</p>
          <p className="each-condition">Legal</p>
        </div>
        <div className="legal-conditions-container">
          <p className="details-text">About</p>
          <p className="details-text">Schedules</p>
          <p className="details-text">Pricing</p>
          <p className="details-text">Membership</p>
          <p className="details-text">Joins</p>
        </div>
      </div>
    </div>
  </div>
)

export default Testimonials
