import PageConst from './PageConst';

export default {
    defaults(props) {
        //初始的state
        return {  
            runing: false
        }
    },

    goRun(ctx, flag) {
        ctx.setState(preState => {
            return { runing: !preState.runing }
        })
    }

};
