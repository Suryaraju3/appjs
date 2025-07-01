import React from 'react'

const Header = ({username}) => {
  return (
    <div className='flex justify-between'>
      
      <h1>logo</h1>
      <p>{username}</p>
    </div>
  )
}

export default Header
