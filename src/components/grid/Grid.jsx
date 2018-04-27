require('./Grid.less');
import Singleapp from '../singleapp'
import Complexapp from '../complexapp'
const Apps = ({microApps, meta}) => {
    if (microApps) {
        return (
            <div className="grid"> {
                meta.map((item, index) => {
                    return (
                        <div className="cell" key={'grid' + index}>
                            <Singleapp item={item} />
                        </div>
                    )
                })
            }
            </div>
        )
    }else {
        return null
    }
}

const Groups = ({homeGroups, meta}) => {
    if (homeGroups) {
        return (
            <div className="grid"> {
                meta.map(item => {
                    return (
                        <div className="cell">
                            <Complexapp item={item} />
                        </div>    
                    )
                })
            }
            </div>
        )
    }else {
        return null
    }
}

function Grid ({ meta, corpId, microApps, homeGroups }){ 

    return (
        <div>
            <Apps microApps={microApps} meta={meta}/>
            <Groups homeGroups={homeGroups} meta={meta}/>
        </div>
    );
};

export default Grid ;