require('./PageUsers.less');
import logic from './PageLogic';
import {Component} from 'refast';
import {createForm} from 'rc-form'
import {Button, List, InputItem, Toast} from 'antd-mobile'
import { Control } from 'react-keeper'
const Item = List.Item
class Users extends Component {
  constructor(props) {
    super(props, logic);

  }
  onSubmit = () => {
    this
      .props
      .form
      .validateFields({
        force: true
      }, (error) => {
        if (!error) {
            const userinfo = this.props.form.getFieldsValue()
          console.log(userinfo);
          this.dispatch('saveUserInfo', userinfo)
        } else {
          alert('Validation failed');
        }
      });
  }

  onReset = () => {
    this
      .props
      .form
      .resetFields();
    Control.go(-1)
  }
  passwordLevel = (password) => {
    var Modes = 0;
    for (let i = 0; i < password.length; i++) {
      Modes |= CharMode(password.charCodeAt(i));
    }
    return bitTotal(Modes);
    //CharMode函数
    function CharMode(iN) {
      if (iN >= 48 && iN <= 57) //数字
        return 1;
      if (iN >= 65 && iN <= 90) //大写字母
        return 2;
      if ((iN >= 97 && iN <= 122) || (iN >= 65 && iN <= 90)) 
        //大小写
        return 4;
      else 
        return 8; //特殊字符
      }
    //bitTotal函数
    function bitTotal(num) {
      let modes = 0;
      for (let i = 0; i < 4; i++) {
        if (num & 1) 
          modes++;
        num >>>= 1;
      }
      console.log('modes=' + modes)
      return modes;
    }
  }

  validateUser = (rule, value, callback) => {
    if (value && value.length > 4) {
      callback();
    } else {
      callback(new Error('用户名已经存在'));
    }
  }
  validatePasswd = (rule, value, callback) => {
    if (this.passwordLevel(value) === 4) {
      callback();
    } else {
      callback(new Error('密码必须包含大小写字母和数字'));
    }
  }
  render() {
    let errors;
    const {getFieldProps, getFieldError} = this.props.form;
    const { userInfo } = this.state
    return (
      <div>
        <form>
          <List
            renderHeader={() => '用户注册'}
            renderFooter={() => (errors = getFieldError('username'))
            ? errors.join(',')
            : null}>
            <InputItem
              {...getFieldProps('username', { 
                  rules: [ { required: true, message: '请输入用户名'}, { validator: this.validateUser } ],
                  initialValue:userInfo.username
                 })}
              clear
              error={!!getFieldError('username')}
              onErrorClick={() => {
              Toast.info(getFieldError('username').join(','))
            }}>用户名</InputItem>
            <InputItem
              {...getFieldProps('password', { rules: [{required: true, message:'请输入密码'}, { validator: this.validatePasswd }] })}
              clear
              type="password"
              error={!!getFieldError('password')}
              onErrorClick={() => {
              Toast.info(getFieldError('password').join(','))
            }}>密码</InputItem>
            <Item>
              <Button type="primary" size="small" inline onClick={this.onSubmit}>确认</Button>
              <Button
                size="small"
                inline
                style={{
                marginLeft: '2.5px'
              }}
                onClick={this.onReset}>取消</Button>
            </Item>
          </List>
        </form>
      </div>
    );
  }

}
const UsersWrapper = createForm()(Users)
export default UsersWrapper;
