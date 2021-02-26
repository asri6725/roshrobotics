import {  Typography } from '@material-ui/core';
import terrabot1 from '../files/Terabot1.png';
import terabot from '../files/Terabot.png';
import ScrollAnimation from 'react-animate-on-scroll';
import {content} from '../_constants/content';
import React from 'react';

class Terabot extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            content : content.TERABOT
        }
    }
    render(){

        const objective_paragraphs = []
        
        for (let i=0; i< this.state.content.OBJECTIVE.CONTENT.length; i++){
            objective_paragraphs.push(<li key={i}> {this.state.content.OBJECTIVE.CONTENT[i]} </li>)
        }
        const scope_paragraphs = []
        
        for (let i=0; i< this.state.content.SCOPE.CONTENT.length; i++){
            scope_paragraphs.push(<li key={i}> {this.state.content.SCOPE.CONTENT[i]} </li>)
        }
    return(
        <div>
            <h1> {this.state.content.TITLE} </h1>

            <p>
                {this.state.content.INTRO}
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
            <h2>
                {this.state.content.SCOPE.TITLE}
            </h2>
            <p>
                {scope_paragraphs}
            </p>
        </div>
    );
    }
}
export default Terabot;