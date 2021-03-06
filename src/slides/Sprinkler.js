import terabot from '../files/Sprinkler.png';
import right from '../files/keyboard_arrow_left-24px.svg';
import './projects.css';

export default function Sprinkler(){
    return(
        <div className="Wrap">
            <h3>Agricultural Sprinkler</h3>
            <div style={{display:"flex"}}>
                <div className="Description">
                    <p className="text">
                    The sprinkler also does something important in Agriculture.
                    </p>
                </div>
                <div className="imgs">
                    <img src={terabot} alt="Terabot" style={{"width":"200px", "height":"100px"}}/>
                </div>
                <div style={{"margin-left":"auto", "margin-right":"0", "margin-top":"10px"}}>
                    <i className="right-chevron">
                            <img src={right} alt="Expand" style={{"width":"50px", "height":"50px", " -webkit-transform": "scaleX(-1)", "transform": "scaleX(-1)"}} />
                    </i>
                </div>
            </div>
        </div>
    );
}