require('./Item.less');
// import PropTypes from 'prop-types'
import { openLink } from '../../utils/util'
// const propTypes = {
//     itemMetas: PropTypes.shape({}).isRequired
// }

function Item({ itemMetas }) {
    let lock = true
    function appLink(url){
        if (lock){
            lock = false;
            openLink(url, function(){
                lock = true;
            });
        }
    }
    return ( 
        itemMetas.isHomeHeaderModel ? (
            <div className="index-item">
                <div className="index-item-center"> 
                 { itemMetas.isAdminOrBoos ? (
                    <div className="index-item-con">
                        <div className="item" onClick={ () => appLink(itemMetas.myTasksUrl) }>
                        <div className="item-right-line">
                            <div className="item-number">
                                { itemMetas.homeHeaderModel.myTasks }
                            </div>
                            <div className="item-text">待我审批</div>
                        </div>
                        </div>
                        <div className="item" onClick={ () => appLink(itemMetas.myTasksUrl) }>
                        <div className="item-right-line">
                            <div className="item-number">{ itemMetas.homeHeaderModel.attendance}</div>
                            <div className="item-text">{ itemMetas.act }</div>
                        </div>
                        </div>
                        <div className="item" onClick={ () => appLink(itemMetas.myTasksUrl) }>
                        <div className="item-right-line">
                            <div className="item-number">{ itemMetas.homeHeaderModel.checkins }</div>
                            <div className="item-text">签到人数</div>
                        </div>
                        </div>
                        <div className="item" onClick={ () => appLink(itemMetas.myTasksUrl) }>
                        <div className="item-right-line">
                            <div className="item-number">{ itemMetas.homeHeaderModel.notReadReport }</div>
                            <div className="item-text">未读日志</div>
                        </div>
                        </div>
                    </div>
                  ) : (
                    <div className="index-item-con">
                        <div className="item" onClick={ () => appLink(itemMetas.myTasksUrl) }>
                            <div className="item-right-line">
                                <text className="item-number">{ itemMetas.homeHeaderModel.myTasks }</text>
                                <text className="item-text">待我审批</text>
                            </div>
                        </div>
                        <div className="item" onClick={ () => appLink(itemMetas.myTasksUrl) }>
                            <div className="item-right-line">
                                <text className="item-number">{ itemMetas.homeHeaderModel.attendance }</text>
                                <text className="item-text">{ itemMetas.act }</text>
                            </div>
                        </div>
                    </div>
                  )
                }
                </div>
            </div>
        ) : null
  );
};

// Item.propTypes =propTypes
export default Item;