// import React from 'react'

type Props = {
  src: string
}

const Img = ({ src }: Props) => {
  return (
    // <img src={src } />
    <div className="bubble-container">
      <img src={src} className="bubble-image" />
      <div className="bubble-overlay"></div>
    </div>
  )
}

export default Img