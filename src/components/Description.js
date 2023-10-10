import React from 'react'

const DescriptionComponent = ({content, showDesc, size}) => {
  const currentStyle = size != null ? { fontSize: `${Math.round(size)}px`, width: '100vw' } : {};

  return (
    <div style={{ width: "100%" }}>
      {content.type != "buttons" ? <p
      className={`descriptionText ${!showDesc ? "noOpacity" : ""}`}
      style={currentStyle}>{content.description}</p> : <div>
        <a className='TwitterBtn' href="https://twitter.com/intent/tweet?text= &hashtags=IStandWithIsrael">
          <img style={{ height: '90.5px', width: '315px', margin: '55px' }} src='/twitterBtn.png' />
        </a>
      </div>}
    </div>
  )
}

export default DescriptionComponent