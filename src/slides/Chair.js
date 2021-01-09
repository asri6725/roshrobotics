import terabot from '../files/Chair2.png';
import './Chair.css';

export default function Chair(){
    return(
        <div className="Container">
            <h3>Chair</h3>
            <div className="ChairText" >
                <div className="Content">
                <p>
                
                    A specialised chair for excavators using hydraulics which will maintain the chair on horizontal position at various inclines. 
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