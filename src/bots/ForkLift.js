import {content} from '../_constants/content';
import React from 'react';
import "./bots.css";
import  back from '../files/keyboard_arrow_left-24px.svg';
import ReactHtmlParser from 'html-react-parser'; 
import { Button } from '@material-ui/core';
import forklift from '../files/forklift.png';
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

            <h2>
                {this.state.content.FIELD.TITLE}
            </h2>

            <p>
                <img src={forklift} style={{width:"370px", height:"300px", display:"inline", display:"inline-block", float:"right"}} />
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
                {ReactHtmlParser (this.state.content.OBJECT.CONTENT)}
            </p>
            </div>
        </div>
    );
    }
}
export default Sprinkler;