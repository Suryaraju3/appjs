import React from 'react'

const page = ({params}) => {
    const {slug} = params;
    console.log(slug)
  return (
    <div>

      {slug}
    </div>
  )
}

export default page
