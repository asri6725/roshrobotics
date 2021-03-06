import {content} from '../_constants/content';
import React from 'react';
import './bots.css';
import  back from '../files/keyboard_arrow_left-24px.svg';

import { Button } from '@material-ui/core';
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
                {this.state.content.CONTENT}
            </p>
             
        </div>
        </div>
    );
    }
}
export default Sprinkler;