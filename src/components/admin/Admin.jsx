/*  import Admin  from 'components/admin';
    <Admin userInfo={ userInfo } />

    attribute: userInfo = {
        headUrl： 头像地址
        name： 用户名
        isAdmin: 管理员标志
    },
    openAdmin: 打开管理员界面
*/
require('./Admin.less');
import PropTypes from 'prop-types'
import { openLink } from '../../utils/util'
const propTypes = {
    userInfo: PropTypes.shape({}).isRequired,
    corpId: PropTypes.string.isRequired
}

function Admin({ userInfo, corpId }) {
  let lock = true
  function openAdmin() {
    if (lock){
      lock = false;
      const adminUrl = "https://h5.dingtalk.com/industry_versatility/get.html?dd_progress=false&corpId=" + corpId;
      openLink(adminUrl, function(){
        lock = true;
      });
    }
  }
  const dateTime = new Date().getHours();
  const isAdmin = userInfo.isAdmin;
  const name = userInfo.name;
  let wh = ''
  let whImage = ''
  if (name) {
    if (dateTime >= 5 && dateTime <= 12) {
      wh = isAdmin
        ? '早上好，管理员，' + name
        : '早上好，' + name;
      whImage = 'https://gw.alicdn.com/tps/TB1ubtjOFXXXXbzXpXXXXXXXXXX-36-36.jpg';
    } else if (dateTime > 12 && dateTime <= 18) {
      wh = isAdmin
        ? '下午好，管理员，' + name
        : '下午好，' + name;
      whImage = 'https://gw.alicdn.com/tps/TB1ubtjOFXXXXbzXpXXXXXXXXXX-36-36.jpg';
    } else {
      wh = isAdmin
        ? '晚上好，管理员，' + name
        : '晚上好，' + name;
      whImage = 'https://gw.alicdn.com/tps/TB15FNwOFXXXXbqXXXXXXXXXXXX-36-36.jpg';
    }
  }
  return (
    <div>
      <div className="index-admin">
        <div className="admin">
          <img className="admin-image" src={whImage}/>
          <div className="admin-hello">{ wh }
          </div>
          <div className="admin-edit" onClick={ () => openAdmin() }>编辑分组</div>
        </div>
      </div>
    </div>
  );
};
Admin.propTypes = propTypes
export default Admin;