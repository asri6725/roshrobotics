import terabot from '../files/Sprinkler.png';
import right from '../files/right.svg';
import './projects.css';

export default function Sprinkler(){
    return(
        <div className="Wrap">
            <h3>Sprinkler</h3>
            <div className="image">
                <i className="right-chevron">
                    <img src={right} alt="Expand" style={{"width":"16%", "height":"16%", "float":"right", "margin-top":"20px"}} />
                </i>
                <div className="imgs">
                    <img src={terabot} alt="Sprinkler" style={{"maxWidth":"100%","maxHeight":"100%"}} href="https://asri6725.github.io/my-app"/>
                </div>
            </div>
            <div className="Description">
                <p className="text">
                The sprinkler also does something important in Agriculture.
               </p>
            </div>
        </div>
    );
}