import React from 'react'
import './style.css';

const Loader = ({style}) => {
    return (
        <div class="loader-container" style={style}>
            <div class="loader"></div>
        </div>
    )
}

export default Loader