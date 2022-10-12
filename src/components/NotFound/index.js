// Write your code here

import './index.css'

import Header from '../Header'

const NotFound = () => (
  <div className="cont-1-not">
    <Header />
    <div className="not-found-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-img"
      />
      <h1 className="h-1-n">Lost Your Way?</h1>
      <p className="para-n">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
