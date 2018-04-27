require('./Applist.less');
import Grid from '../grid'
function Applist({allapplistMetas, corpId}) {
    if (allapplistMetas.isMicroApps) {
        const microappsFlag = true
        return (
            <div className="index-all-applist">
                <div className="applist-title">
                    <h1 className="applist-text">全部应用</h1>
                </div>
                <Grid meta={allapplistMetas.microApps} corpId={corpId} microApps={microappsFlag}></Grid>
            </div>
        )
    }else {
        return null
    }
};

export default Applist;