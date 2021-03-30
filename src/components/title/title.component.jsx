import React from 'react';
import './title.style.css';


const Title = ({onRefresh, placeName }) => {
 return (
        <div className="title-bar row">
            <div className="col-md-12">
                <div className="float-left place-name">{placeName}</div>
                <div onClick={onRefresh} style={{width:"50px"}} className="float-right"><i className="refresh-icon fas fa-sync-alt"></i></div>
            </div>
        </div>

    )
}

export default Title;