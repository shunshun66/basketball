require('./Complexapp.less');
const Loger = ({appType}) => {
    if (appType === 1) {
        return (
            <div className="cell-app-type-container">
                <div className="cell-app-type">日志</div>
            </div>
        )
    }else {
        return null
    }
}

const Checker = ({appType}) => {
    if (appType === 2) {
        return (
            <div className="cell-app-type-container">
                <div className="cell-app-type">审批</div>
            </div>
        )
    }else {
        return null
    }
}

const Reporter = ({item}) => {
    if (item.appType === 3) {
        return (
            <div>
                <div className="cell-image-container">
                    <div className="cell-mount">{ item.formatNumber.val }</div>
                    <div className="cell-unit">{ item.formatNumber.unit }</div>
                    <div className="cell-app-type-container">
                        <div className="cell-app-type">智能报表</div>
                    </div>
                </div>
                <div className="cell-text">{ item.title }</div>
                <div className="cell-tag">{ item.tableName }</div>
            </div>            
        )
    } else {
        return (
            <div>
                <div className="cell-image-container">
                    <img className="cell-image" src={item.imgPath}/>
                    <Loger appType={item.appType} />
                    <Checker appType={item.appType} />
                </div>
                <div className="cell-text">{ item.title }</div>
            </div>            
        )
    }
}
function Complexapp ({ item, homeGroupsOpenLink  }){ 

    return (
        <div className="cell-box" onClick={ homeGroupsOpenLink(item) }>
            <Reporter item={item} />
        </div>
    );
};

export default Complexapp ;