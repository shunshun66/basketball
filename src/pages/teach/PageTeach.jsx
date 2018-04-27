require('./PageTeach.less');
import logic from './PageLogic';
import { Component } from 'refast';  
import Circlebutton from 'components/circlebutton';

class Teach extends Component {
    constructor(props) { 
        super(props, logic);        
        
    }
    goTeach = () => {
        this.dispatch('goRun')
        console.log('开始上课了')
    }
    render() {
        const { runing } = this.state
        return (
            <Circlebutton title="开始上课" runing={runing} teachClick={this.goTeach}/>
        );
    }

}

export default Teach ;
