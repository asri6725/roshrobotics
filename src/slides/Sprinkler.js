import terabot from '../files/Sprinkler.png';
import './Sprinkler.css';

export default function Sprinkler(){
    return(
        <div className="SprinklerContainer">
            <h3>Sprinkler</h3>
            <div className="SprinklerText" >
                <div className="Content">
                <p>
                    The sprinkler also does something important in Agriculture.
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