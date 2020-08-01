import React, { useState } from 'react'
import ImageComponent from './ImageComponent.js'

const Gallary = ({ imgUrls }) => {

    return (

        <div className="gallery">
            {
                imgUrls.map((url, index) =>
                    <ImageComponent src={url} alt={url} />
                )
            }
        </div>
    )
}

export default Gallary
