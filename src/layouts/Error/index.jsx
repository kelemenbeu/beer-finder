import React from "react"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <>
      <div>
        <h1>404</h1>
        <div className="message-container">
          <h2>Page not found.</h2>
        </div>
      </div>
      <div>
        <Link to="/">Back</Link>
      </div>
    </>
  )
}

export { Error }
