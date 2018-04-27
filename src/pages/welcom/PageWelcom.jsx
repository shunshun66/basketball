require('./PageWelcom.less');
import logic from './PageLogic';
import {Component} from 'refast';
import { Control } from 'react-keeper';
import { Grid, List } from 'antd-mobile';
import Advimgs from 'components/advimgs'
const Item = List.Item;
const Brief = Item.Brief;
class Welcom extends Component {
  constructor(props) {
    super(props, logic);

  }

  handleClick = (el, index) => {
      let page = '/'
      debugger
      switch (index) {
          case 0:
            page = '/teach'
            break
          case 1:
            page = '/main/adduser'
            break
          case 2:
            page = '/main/news'
            break
      }
      Control.go(page)
  }

  detialClick = (newsInfo) => {
    Control.go('/home/news/detail', newsInfo)
  }

  componentDidMount() {
    const height = document.getElementsByClassName("my-list")[0].offsetHeight - 50
    console.log(height)
    this.dispatch('changeHeight', height + 'px')
  }
  render() {
    const { advImgs, handles, news, newsHeight } = this.state  
    return (
      <div>
        <Advimgs imgs={advImgs} />
        <Grid data={handles} columnNum={3} hasLine={false} onClick={this.handleClick }/>
        <List renderHeader={() => '最新活动'} className="my-list" style={{height: newsHeight}}>
            {
                news.length > 0 ? news.map((newsInfo, key) => (
                    <Item extra={newsInfo.time} align="middle" 
                        thumb={newsInfo.imgUrl}
                        multipleLine arrow="horizontal"
                        onClick={() => {}}>
                        {newsInfo.title} 
                        <Brief>{newsInfo.subtitle}</Brief>
                    </Item>
                )) : ''
            }
      </List>
      </div>
    );
  }

}

export default Welcom;
