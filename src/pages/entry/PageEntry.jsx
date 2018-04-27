require('./PageEntry.less');
import logic from './PageLogic';
import {Component, LogicRender} from 'refast';
import {List, InputItem, Toast} from 'antd-mobile';

class Entry extends Component {
  constructor(props) {
    super(props, logic);

  }
  onErrorClick = (id) => {
    const { state: { rule },  } = this;
    if (rule[id].hasError) {
      Toast.info(rule[id].message);
    }
  }
  onChange = (value) => {
    console.log(this.input)
    const name = this.input.props.name
    this.dispatch('itemChange',{id: name, value: value});
  }
  render() {
    const { state: { rule, form },  } = this;
    return (
      <div>
        <List renderHeader={() => 'Confirm when typing'}>
          <InputItem
            type="phone"
            name="telNo"
            ref={(input) => this.input = input}
            placeholder="请输入电话号码"
            error={rule['telNo'].hasError}
            onErrorClick={this.onErrorClick("telNo")}
            onChange={this.onChange}
            value={form.telNo}>手机号码</InputItem>
        </List>
      </div>
    );
  }

}

export default Entry;
