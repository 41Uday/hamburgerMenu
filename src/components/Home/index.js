// Write your code here

import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="bg-container">
    <Header />
    <div className="cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="home-img-1"
      />
    </div>
  </div>
)

export default Home
