import React from 'react';
import './Backdrop.css'

const backdrop = (props) => {
    return props.showBackdrop ? <div className="backdrop"></div> : null
}

export default backdrop