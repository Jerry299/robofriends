import React from 'react';


const Scroll = (props) => {
    return (
        <div style={scrollStyle}>
            {props.children}
        </div>
    )
}

const scrollStyle = {
    overflow: 'scroll',
    border: '2px solid #000',
    height: '70vh'
}



export default Scroll;