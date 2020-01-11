import React from "react"
import styles from "./styles.css"
import "bootstrap/dist/css/bootstrap.min.css"

const index = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                UPCOMING EVENTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                GALLERY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default index
