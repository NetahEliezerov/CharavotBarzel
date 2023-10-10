import React from 'react'

const DescriptionComponent = ({content, showDesc}) => {
  return (
    <div style={{ width: "100%" }}>
        <p className={`descriptionText ${!showDesc ? "noOpacity" : ""}`}>{content.description}</p>
    </div>
  )
}

export default DescriptionComponent