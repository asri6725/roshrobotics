import terabot from '../files/Chair2.png';
import right from '../files/right.svg';
import './projects.css';

export default function Chair(){
    return(
        <div className="Wrap">
            <h3>Chair</h3>
            <div className="image">
                <i className="right-chevron">
                    <img src={right} alt="Expand" style={{"width":"16%", "height":"16%", "float":"right", "margin-top":"20px"}} />
                </i>
                <div className="imgs">
                    <img src={terabot} alt="Chair" style={{"maxWidth":"200px","maxHeight":"200px"}} href="https://asri6725.github.io/my-app"/>
                </div>
            </div>
            <div className="Description">
                <p className="text">
                A specialised chair for excavators using hydraulics which will maintain the chair on horizontal position at various inclines. 
               </p>
                
               
            </div>
        </div>
    );
}