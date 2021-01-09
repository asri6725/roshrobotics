import terabot from '../files/Terabot.png';
import './Terabot.css';

export default function Terabot(){
    return(
        <div className="TerabotContainer">
            <h3>Terabot</h3>
            <div className="Text" >
                <div className="Content">
                <p>
                Material handling in industries to manouver over harsh terrain to perform varios tasks with specialised hand.
                </p>
                </div>
            </div>
            <div className="ImageContainer">
                <a href="/Terabot">
                <img src={terabot} style={{'width':'80%', 'height':'80%', 'border-radius': '10%'}}></img>
                </a>
            </div>
        </div>
    );
}