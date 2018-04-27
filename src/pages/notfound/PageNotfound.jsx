require('./PageNotfound.less');
import logic from './PageLogic';
import { Component, LogicRender } from 'refast';  


class Notfound extends Component {
    constructor(props) { 
        super(props, logic);        
        
    }

    render() {
        return (
            <div>
              <h4>没有找到页面</h4>
            </div>
        );
    }

}

export default Notfound ;
