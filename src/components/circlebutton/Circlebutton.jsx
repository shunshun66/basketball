require('./Circlebutton.less');
import PropTypes from 'prop-types'

const propTypes = {
    title: PropTypes.string.isRequired,
    teachClick: PropTypes.func.isRequired
}

function Circlebutton({ title, runing, teachClick }) {
    function clickEvent(){
        teachClick()
    }
    return ( 
        <div>
            <div className="circleProgress_wrapper">  
                <div className="wrapper right">  
                    <div className={runing ? "circleProgress rightcircle" : "circleProgress rightinit"}>
                    </div>  
                </div>  
                <div className="wrapper left">  
                    <div className={runing ? "circleProgress leftcircle" : "circleProgress leftinit"}></div>  
                </div>  
            </div>  
            <div className="circletitle"  onClick={ () => clickEvent() }>
                <h4 className="titlename">{title}</h4>
            </div>
        </div>
  );
};

Circlebutton.propTypes =propTypes
export default Circlebutton;