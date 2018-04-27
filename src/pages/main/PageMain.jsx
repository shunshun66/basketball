require('./PageMain.less');
import logic from './PageLogic';
import { Component, LogicRender } from 'refast';  
import MainBanner  from '../../components/main-banner'
import Item from 'components/item'
import Admin from 'components/admin'
import Userlist from 'components/userlist'
import Applist from 'components/applist'
import Appmanager from 'components/appmanager'

class Main extends Component {
    constructor(props) { 
        super(props, logic);        
        
    }

    addManager = () => {
        console.log('add manager')
    }

    render() {
        const { state: {openAppManager, corpId, userId, meta }} = this
        const banners = meta.bannerMetas
        return (
            <div className="app-container">
                <MainBanner bannerMetas={banners} cropId={corpId}/>
                <Item itemMetas={meta.itemMetas}/>
                <Admin userInfo={meta.userInfo} corpId={corpId}/>
                <Userlist userlistMetas={meta.userlistMetas} corpId={corpId} />
                <Applist allapplistMetas={meta.allapplistMetas} corpId={corpId}/>
                {
                    openAppManager && <Appmanager admin={meta.admin} corpId={corpId} addManager={this.addManager}/>
                }
            </div>
        );
    }

    componentDidMount() {
        this.dispatch('init')
    }
}

export default Main ;
