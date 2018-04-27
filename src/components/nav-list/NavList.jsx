require('./NavList.less');
import { List } from 'antd-mobile'
const Item = List.Item
const Brief = Item.Brief
function NavList ({ navs, navTitle, clickHandle }){ 
    function click(path){
        clickHandle(path);        
    }
    return (
        <div className="iosclick">
            <List renderHeader={ () => navTitle }> {
                    navs ? navs.map((item, key) => {
                        return (
                        <Item thumb= { item.thumb } key={ 'nav' + key } onClick={() => {click(key)}} 
                            arrow="horizontal">{ item.title }</Item>
                        )
                    }) : ''
                }
            </List>  
        </div>
    );
};

export default NavList ;