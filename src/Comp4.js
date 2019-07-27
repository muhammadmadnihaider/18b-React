import React from 'react';

let divStyle = {
    backgroundColor:'deeppink',
    paddingTop:'20px',
    paddingBottom:'20px',

}

class Comp4 extends React.Component{
    render(){
        return(
            <div style = {divStyle}>Deeppink</div>
        );
    }
}

export default Comp4;