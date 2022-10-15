import React from 'react'

const inlinestyle={
    color:'red',
    fontSize:'4em',
    textAlign:'center',
    textDecoration:'underline'
}
function Inline() {
  return (
    <div>
      <h1 style={inlinestyle}>Inline Styling</h1>
      <h2 className='secondary'>Welcome</h2>
    </div>
  )
}

export default Inline
