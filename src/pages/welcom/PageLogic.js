import PageConst from './PageConst';

export default {
    defaults(props) {
        //初始的state
        return {  
            advImgs: PageConst.bannerImgs,
            handles: PageConst.handles,
            news: PageConst.tmpnews,
            newsHeight: '100%'
        }
    },
    changeHeight(ctx, height) {
        ctx.setState({newsHeight: height})
    }
};
