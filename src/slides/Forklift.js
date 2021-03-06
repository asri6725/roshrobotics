import right from '../files/keyboard_arrow_left-24px.svg';
import './projects.css';

export default function Forklift(){
    return(
        <div className="Wrap" style={{display:'flex'}}>
            <div>
            <h3>Automatic Forklift Horn Control Technology</h3>
            <div className="Description">
                <p className="text">
                Automated forklift horn control technology for increaased safety.
               </p>
            </div>
            </div>
            <div style={{"margin-left":"auto", "margin-right":"0", "margin-top":"20px"}}>
            <i className="right-chevron">
                    <img src={right} alt="Expand" style={{"width":"50px", "height":"50px", " -webkit-transform": "scaleX(-1)", "transform": "scaleX(-1)"}} />
            </i>
            </div>
        </div>
    );
}