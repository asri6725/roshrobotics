import {content} from '../_constants/content';
import React from 'react';

class Chair extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            content : content.CHAIR
        }
    }
    render(){

        const objective_paragraphs = []
        
        for (let i=0; i< this.state.content.OBJECTIVE.CONTENT.length; i++){
            objective_paragraphs.push(<li key={i}> {this.state.content.OBJECTIVE.CONTENT[i]} </li>)
        }
        const applications_paragraphs = []
        
        for (let i=0; i< this.state.content.APPLICATIONS.length; i++){
            applications_paragraphs.push(<li key={i}> {this.state.content.APPLICATIONS[i]} </li>)
        }
    return(
        <div>
            <h1> {this.state.content.TITLE} </h1>

            <p>
                {this.state.content.INTRO}
            </p>
             
             <h2>
                 Applications
             </h2>

            <p>
                {applications_paragraphs}
            </p>

            <p>
                {this.state.content.PROBLEM_STATEMENT}
            </p>

            <h2>
                {this.state.content.OBJECTIVE.TITLE}
            </h2>
            <p>
                {objective_paragraphs}
            </p>
          
        </div>
    );
    }
}
export default Chair;