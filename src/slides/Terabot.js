import terabot from '../files/Terabot.png';
import right from '../files/keyboard_arrow_left-24px.svg';
import './projects.css';

export default function Terabot(){
    return(
        <div className="Wrap">
            <h3>Terabot</h3>
            <div style={{display:"flex"}}>
                <div className="Description">
                    <p className="text">
                    Material handling in industries to manouver over harsh terrain to perform varios tasks with specialised hand.
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