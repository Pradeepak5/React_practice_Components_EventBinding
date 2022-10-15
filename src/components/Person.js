import React from 'react'

function Person({names}) {
  return (
    <div>
            {
                <div>My name is {names.name}, i am {names.age} years old. I am expert in {names.skill}</div>
            }
    </div>
  )
}

export default Person;
