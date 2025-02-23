import React from 'react'
import {CirclesWithBar } from 'react-loader-spinner'

export default function Loading() {
  return <>

  <div className="container flex justify-center items-center">
    
<CirclesWithBar
  height="80vh"
  width="100"
  color="#F29724"
  outerCircleColor="#F29724"
  innerCircleColor="#F29724"
  barColor="#F29724"
  ariaLabel="circles-with-bar-loading"
  wrapperStyle={{}}
  wrapperClass={{}}
  visible={true}
  />

  </div>
  </>
}
