require('./Singleapp.less');
import { openLink, parseCorpId } from '../../utils/util'

function Singleapp ({ item }){ 
    var lock = true;
    function microAppsOpenLink(item) {
        debugger
        if (lock){
            lock = false;
            const appId = item.appId;
            const url = item.homepageLink;
            const corpId = parseCorpId(location.href, 'corpId');
            if (appId > 0){
                // 企业自己的微应用
                openLink(url, function(){
                    lock = true;
                });
            } else {
                lock = true;
                // isv
                window.location.href = 'dingtalk://dingtalkclient/action/switchtab?index=2&name=work&scene=1&corpid='+corpId+'&appid='+ appId
            }
        }
    }
    
    return (
         <div className="cell-box" onClick={() => microAppsOpenLink(item)}>
            <div className="cell-image-container">
                <img className="cell-image" src={item.appIcon} onClick={(e) => microAppsOpenLink(item, e)}/>
            </div>
            <div className="cell-text">{ item.name }</div>
        </div>
    );
};

export default Singleapp ;