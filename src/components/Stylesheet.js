import React from 'react'
import './Mystyle.css'
function Stylesheet(props) {
    var classname=props.styling?'primary':''
  return (
    <div>
      <h1 className={`${classname} font-xl`}>StyleSheet</h1>
    </div>
  )
}

export default Stylesheet
