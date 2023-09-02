import './index.css'

const Destinations = () => (
  <div className="destinations-bg-container">
    <h1 className="destination-heading">Our Destinations</h1>
    <div className="destinations-cards-container">
      <div className="destination-card">
        <img
          className="college-image"
          alt="destination"
          src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693678937/do56oyihntb2z9ncfjtz.png"
        />
        <div className="card-body">
          <p className="college-name">Harvard University</p>
        </div>

        <div className="card-footer">
          <p className="college-location">Cambridge, Massachusetts, UK</p>
          <div>
            <img
              alt="three dots"
              src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693679459/hysv8ol1jhmtfpt3b3xt.png"
            />
          </div>
        </div>
      </div>
      <div className="destination-card">
        <img
          className="college-image"
          alt="destination"
          src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693680968/tqsi1szfw2dtyo831jdu.png"
        />
        <div className="card-body">
          <p className="college-name">Oxford University</p>
        </div>

        <div className="card-footer">
          <p className="college-location">Oxford, England</p>
          <div>
            <img
              alt="three dots"
              src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693679459/hysv8ol1jhmtfpt3b3xt.png"
            />
          </div>
        </div>
      </div>
      <div className="destination-card">
        <img
          className="college-image"
          alt="destination"
          src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693681054/u52tyqobbim4hzbgxryh.png"
        />
        <div className="card-body">
          <p className="college-name">Stanford University</p>
        </div>

        <div className="card-footer">
          <p className="college-location">Stanford, California</p>
          <div>
            <img
              alt="three dots"
              src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693679459/hysv8ol1jhmtfpt3b3xt.png"
            />
          </div>
        </div>
      </div>
      <div className="destination-card">
        <img
          className="college-image-4"
          alt="destination"
          src="https://lh3.googleusercontent.com/p/AF1QipOSSVrbwNP_h8spljS3GcRye3Al3DNHAitCDVQ=s680-w680-h510"
        />
        <div className="card-body">
          <p className="college-name">Nanyang Technological University</p>
        </div>

        <div className="card-footer">
          <p className="college-location">Nanyang Ave, Singapura</p>
          <div>
            <img
              alt="three dots"
              src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693679459/hysv8ol1jhmtfpt3b3xt.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="destination-footer">
      <img
        className="arrow"
        alt="left"
        src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693682250/zwrl8ouyt2awkpctijpz.png"
      />
      <p className="page-count">
        2 <span className="span-count">/ 140</span>
      </p>
      <img
        className="arrow"
        alt="right"
        src="https://res.cloudinary.com/dss1xnwen/image/upload/v1693682341/bvef8lxhmoiqpzyy6z3w.png"
      />
    </div>
  </div>
)

export default Destinations
