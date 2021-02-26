import {content} from '../_constants/content';
import React from 'react';

class Sprinkler extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            content : content.SPRINKLER
        }
    }
    render(){

       
    return(
        <div>
            <h1> {this.state.content.TITLE} </h1>

            <p>
                {this.state.content.CONTENT}
            </p>
             
        </div>
    );
    }
}
export default Sprinkler;