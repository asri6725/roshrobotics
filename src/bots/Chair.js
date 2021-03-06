import {content} from '../_constants/content';
import React from 'react';
import  back from '../files/keyboard_arrow_left-24px.svg';
import './bots.css';

import { Button } from '@material-ui/core';

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
            <div className="navbar-bots">
                <div className="back-container" style={{display:"flex"}} >
                <i>
                    <img src={back} style={{width:"30px", height:"30px", marginLeft:"20px"}}/>
                </i>
                <a href="/">Back to Home</a>
                <Button variant="contained" color="secondary" style={{marginLeft:"auto", marginRight:"70px"}} > Patent </Button>
                </div>
            </div>
            <div className="Wrapper">
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
        </div>
    );
    }
}
export default Chair;