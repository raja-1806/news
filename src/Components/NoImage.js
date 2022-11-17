import React from "react";
import Image from './NoImage.png'

const NoImage = () => {
    return(
    <div>
        <img src={Image} alt="NoImage" />
    </div>
    )
}

export default NoImage;