// Write your code here

import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-cont">
    <Header />
    <div className="inner-about-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="img-about"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="img-about-1"
      />
    </div>
  </div>
)

export default About
