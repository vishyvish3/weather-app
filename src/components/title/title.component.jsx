import React from 'react';
import './title.style.css'

const Title = ({timezone}) => {
    return(
        <div className="title-bar row">
            <div className="col-md-12">
            <div className="float-left">CHENNAI</div>
            <div className="float-right">X</div>
        </div>
        </div>
        
    )
}

export default Title;