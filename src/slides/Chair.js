import terabot from '../files/Chair2.png';
import right from '../files/keyboard_arrow_left-24px.svg';
import './projects.css';

export default function Chair(){
    return(
        <div className="Wrap">
            <h3>Excavator Machine</h3>
            <div style={{display:"flex"}}>
                <div className="Description">
                    <p className="text">
                    A specialised chair for excavators using hydraulics which will maintain the chair on horizontal position at various inclines. 
                    </p>
                </div>
                <div className="imgs">
                    <img src={terabot} alt="Terabot" style={{"width":"220px", "height":"200px"}}/>
                </div>
                <div style={{"margin-left":"auto", "margin-right":"0", "margin-top":"50px"}}>
                    <i className="right-chevron">
                            <img src={right} alt="Expand" style={{"width":"50px", "height":"50px", " -webkit-transform": "scaleX(-1)", "transform": "scaleX(-1)"}} />
                    </i>
                </div>
            </div>
        </div>
    );
}