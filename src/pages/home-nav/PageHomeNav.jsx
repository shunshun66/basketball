require('./PageHomeNav.less');
import * as logic from './PageLogic';
import { Component } from 'refast';  
import NavList from 'components/nav-list'
import { Control, Route } from 'react-keeper';
import Ding from '../../dings'

class HomeNav extends Component {
    constructor(props) { 
        super(props, logic);        
        
    }
    clickHandle = (key) => {
        // Control.go(path, ); // keeper的跳转
        if (key === 0) {
            Control.go('/home/register', ); // keeper的跳转
        } else {
            Control.go('/users')
            // dd.ready( () => {
            //     Ding.sync(dd.device.notification.alert, {
            //         message: "亲爱的",
            //         title: "提示",//可传空
            //         buttonName: "收到"}).then(() => {
            //             console.log('ok')
            //         }).catch(err => {
            //             console.log(err)
            //         })
            // })   
        }
        
    }

    render() {
        const { state: { nav, },  } = this;
        return (
            <div>
                <NavList navs={ nav } navTitle ='办公自动化' clickHandle = { this.clickHandle }/>
            </div>
        );
    }

}

export default HomeNav ;
