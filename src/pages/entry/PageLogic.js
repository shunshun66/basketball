import PageConst from './PageConst';

export default {
  defaults(props) {
    //初始的state
    return {
      form: {
        telNo: '',
        name: ''
      },
      rule: {
        telNo: {
          hasError: false,
          message: '请输入正确的电话号码'
        },
        name: {
          hasError: false,
          message: '请输入姓名'
        }
      }
    }
  },
  itemChange(ctx, data) {
    const {id, value} = data
    let check = false
    switch (id) {
      case 'telNo':
        if (!!value && value.replace(/\s/g, '').length < 11) {
          check = true
        }
        break
      case 'name':
        if (!value) {
          check = true
        }
        break
    }
    let infos = ctx.getState()
    infos.rule[id].hasError = check
    infos.form[id] = value
    ctx.setState(infos);
  }
};
