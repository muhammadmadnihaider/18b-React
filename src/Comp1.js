import React from 'react';
let divStyle = {
    backgroundColor:'Green',
    paddingTop:'20px',
    paddingBottom:'20px',

}
class Comp1 extends React.Component{
    render(){
        return(
            <div style={divStyle}>Green</div>
        );
    }
}

export default Comp1;