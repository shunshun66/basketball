require('./Appmanager.less');
const AdminItem = ({isAdmin}) => {
    if (isAdmin) {
        return (
        <div className="add-manager-text">添加/管理</div>
        )
    } else {
        return (
        <div className="add-manager-text">查看更多</div>
        )
    }
} 
function Appmanager ({ admin, corpId, addManager }){ 
    function addhandle() {
        addManager()
    }
    return (
        <div className="add-manager">
            <div className="add-manager-container" onClick={ () => addhandle() }>
                <img className="add-manager-add-icon" src="https://gw.alicdn.com/tps/TB1O.peOFXXXXbvXpXXXXXXXXXX-42-42.png"/>
                <AdminItem isAdmin={admin} />
                <img className="add-manager-more-icon" src="https://gw.alicdn.com/tps/TB12pIZOpXXXXaxXVXXXXXXXXXX-16-28.jpg"/>
            </div>
        </div>
    );
};

export default Appmanager ;