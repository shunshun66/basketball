require('./Userlist.less');
import Grid from '../grid'

const Userline = ({no, line}) => {
    if (no + 1 !== line) {
        return <div className="index-userlist-line"></div>
    }else {
        return null
    }
}
function Userlist({userlistMetas, corpId}) {
    if (userlistMetas.isHomeGroups) {
        return (
            <div className="index-userlist">
                {userlistMetas.homeGroups
                    ? userlistMetas.homeGroups
                        .map((appGroupList, index) => {
                            <div className="index-userlist-item">
                                <div className="index-title">
                                    <div className="index-text">{appGroupList.groupName}</div>
                                </div>
                                <Grid meta={appGroupList.homeGroupDetail} homeGroups={true} corpId={corpId}></Grid>
                                <Userline no={index} line={userlistMetas.renderLine}/>
                            </div>
                        })
                    : ''
                }
            </div>
        )
    }else {
        return null
    }
};

export default Userlist;