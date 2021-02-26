import {content} from '../_constants/content';
import React from 'react';

class Sprinkler extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            content : content.FORKLIFT
        }
    }
    render(){
        let paragraphs = []

        for(var i=0; i<this.state.content.FIELD.PARAGRAPHS.length; i++){
            paragraphs.push(<li key={i}> { this.state.content.FIELD.PARAGRAPHS[i] } </li>)
        }
       
    return(
        <div>
            <h1> {this.state.content.TITLE} </h1>

            <h2>
                {this.state.content.FIELD.TITLE}
            </h2>

            <p>
                {this.state.content.FIELD.INTRO}
            </p>

            <p>
                {paragraphs}
            </p>

            <p>
                {this.state.content.FIELD.END}
            </p>

            <h2>
                {this.state.content.OBJECT.TITLE}
            </h2>

            <p>
                {this.state.content.OBJECT.CONTENT}
            </p>
             
        </div>
    );
    }
}
export default Sprinkler;