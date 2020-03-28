import React from "react"
import { Header } from "./Header"

const Framed = ({ userName, children, className }) => {
  return (
    <>
      <Header userName={userName} />
      <div className={className}>{children}</div>
    </>
  )
}


export default Framed
