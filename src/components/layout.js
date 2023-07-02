import React from 'react'

const Layout = (props) => {
  return (
    <div>
      <h1>UPPER PART</h1>
      {props.children || null}
      <h1>LOWER PART </h1>
    </div>
  )
}

export default Layout