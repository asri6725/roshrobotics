import terabot from '../files/Terabot.png';
import right from '../files/right.svg';
import './projects.css';

export default function Terabot(){
    return(
        <div className="Wrap">
            <h3>Terabot</h3>
            <div className="image">
                <i className="right-chevron">
                    <img src={right} alt="Expand" style={{"width":"16%", "height":"16%", "float":"right", "margin-top":"20px"}} />
                </i>
                <div className="imgs">
                    <img src={terabot} alt="Terabot" style={{"maxWidth":"100%","maxHeight":"100%"}}/>
                </div>
            </div>
            <div className="Description">
                <p className="text">
                Material handling in industries to manouver over harsh terrain to perform varios tasks with specialised hand.
               </p>
            </div>
        </div>
        
    );
}