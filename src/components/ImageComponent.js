import React from 'react'

const ImageComponent = ({ alt, src }) => {
    return (
        <div className="image-component">
            <img className="single-image" alt={alt} src={src} />
        </div>
    )
}

export default ImageComponent
