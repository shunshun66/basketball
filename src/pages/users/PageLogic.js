import PageConst from './PageConst';

export default {
    defaults(props) {
        //初始的state
        return {  
            userInfo: {
                username: 'xhq',
                password: ''
            }
        }
    },
    async saveUserInfo(ctx, data) {
        const { username, password } = data
        ctx.setState({
            userInfo: data
        })
        const res = await ctx.Api.user.register(data)
        console.log(res)
    }


};
