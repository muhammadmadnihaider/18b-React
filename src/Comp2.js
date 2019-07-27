import React from 'react';
let divStyle = {
    backgroundColor:'orange',
    paddingTop:'20px',
    paddingBottom:'20px',
}
class Comp2 extends React.Component{
    render(){
        return(
            <div style={divStyle} >Orange</div>
        );
    }
}

export default Comp2;