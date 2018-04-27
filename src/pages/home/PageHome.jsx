require('./PageHome.less');
import logic from './PageLogic';
import { Control, Route } from 'react-keeper';
import { Component, LogicRender } from 'refast';

import TabBar, { activeTabbar } from 'components/card-tabbar';
import { NavBar, Icon } from 'antd-mobile';
import Ding from '../../dings'

class Home extends Component {
    constructor(props) { super(props, logic);        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(key){
        this.dispatch('setTabbarIndex',key);
        Control.go(this.state.menu[key].path, ); // keeper的跳转
    }

    render() {
        const { state: { menu, tabbarIndex, badge, },  } = this;
        const activeIndex=activeTabbar( menu );
        
        if (tabbarIndex != activeIndex  ){ // 对比url索引和当前选中的值,如不对应则纠正.
            this.dispatch('setTabbarIndex',activeIndex);
        }

        return (
            <div className="home">
                <NavBar
                    icon={<Icon type="left" />}
                    onLeftClick={() => Control.go(-1)}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                      ]}
                    mode="light">
                    篮球俱乐部管理
                </NavBar>

                {/*中间嵌套的页面*/}
                {this.props.children}

                <TabBar menu={menu} tabbarIndex={tabbarIndex} badge={badge} onChange={this.handleChange} />
            </div>
        );
    }

    componentDidMount() {
        dd.ready(() => {
            // Ding.getUserInfo()
            dd.biz.navigation.setTitle({ title:'Home' })
        })
        
    }

}

export default Home ;
