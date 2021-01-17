import {  Typography } from '@material-ui/core';
import terrabot1 from '../files/Terabot1.png';
import terabot from '../files/Terabot.png';
import ScrollAnimation from 'react-animate-on-scroll';



export default function Terabot(){
    return(
        <div style={{'margin-top':'70px'}}>
            <Typography variant="h5" style={{ 'margin-left':'5%'}}>
                Terabot
            </Typography>
            <Typography style={{ 'margin-left':'5%','margin-top':'2%', 'margin-right':'5%' }}>
            The goal of this project was to design, development and manufacturing a prototype of a sophisticated 
            mechanism capable of functioning in constrained and harsh terrain region using electromagnetic gripper arms.
            </Typography>
            
            <img src={terrabot1} style = {{'width':'40%', 'height':'40%', 'margin-left':'30%', 'margin-top':'5%', 'margin-bottom':'5%', 'margin-right':'30%'}} />
            
            <img src={terabot} style = {{'width':'30%', 'height':'30%', 'margin-right':'10%', 'margin-bottom':'5%', 'float':'right'}} />
            <Typography style={{ 'margin-left':'5%','padding-top':'5%','margin-top':'2%', 'width':'50%' }}>
                The objective of this project is not only to pick & place object but also to overcome the hurdles in its path without any difficulty. 
            </Typography>
        
        </div>
    );
}