import React from 'react'

const DescriptionComponent = ({content, showDesc, size}) => {
  const currentStyle = size != null ? { fontSize: `${Math.round(size)}px`, color: "red", opacity: `${(Math.round(window.pageYOffset*3) - 7150 - 28171) / 988 + 0.3}` } : {};

  return (
    <div style={{ width: "77vw", marginTop: "-10vh", float: 'right' }}>
      {content.type != "buttons" ? <p
      className={`descriptionText ${!showDesc ? "noOpacity" : ""}`}
      style={currentStyle}>{content.description}</p> : <div>
        <a className='TwitterBtn' href="https://twitter.com/intent/tweet?text= &hashtags=IStandWithIsrael">
          <img style={{ height: '90.5px', width: '315px', margin: '55px', animationName: 'examplefull', animationDuration: '600ms' }} src='/twitterBtn.png' />
        </a>
      </div>}
    </div>
  )
}

export default DescriptionComponent