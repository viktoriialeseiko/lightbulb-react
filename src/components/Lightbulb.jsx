import React from 'react';
import './lightbulb.css';

const Lightbulb = (props) => {
    return(
        <div>
            <img src={props.url}/>
        </div>
    )
}

export default Lightbulb;