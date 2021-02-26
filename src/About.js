import {content} from './_constants/content';
import React from 'react';

class About extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            content : content.ABOUT
        }
    }
    render(){

       
    return(
        <div>
            <h1> {this.state.content.TITLE} </h1>

            <h2>
                {this.state.content.SUBTITLE}
            </h2>

            <p>
                {this.state.content.CONTENT}
            </p>

        </div>
    );
    }
}
export default About;