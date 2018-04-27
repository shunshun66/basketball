import PageConst from './PageConst';
import { parseMetaData, parseMicroApps } from '../../utils/util';
import metaData from '../../mock/meta'
import Ding from '../../dings'
import _ from 'lodash'
const { corpId } = require(`config/${ENV}.json`);
export default {
    defaults(props) {
        //初始的state
        return {
            openAppManager: false,
            corpId: corpId,
            userId: '',
            meta: {
                admin: false,
                bannerMetas: {
                    homeBannerModels: [],
                    isHomeBannerModels: false
                },
                itemMetas: {
                    homeHeaderModel: {},
                    act: '',
                    isAdminOrBoos: false,
                    attendanceUrl: '',
                    myTasksUrl: '',
                    checkinsUrl: '',
                    notReadReportUrl: '',
                    isHomeHeaderModel: false
                },
                userlistMetas: {
                    homeGroups: [],
                    renderLine: 0,
                    isHomeGroups: false
                },
                allapplistMetas: {
                    microApps: [],
                    isMicroApps: false,
                    corpId: ''
                },
                h5Config: {},
                userInfo: {
                    name: ''
                }
            },
            ...PageConst
        }
    },
    async init(ctx) {
        const metainfos = parseMetaData(metaData)
        ctx.setState({ meta: metainfos,  openAppManager: true })
        await getMicroApps(ctx)
        getUserId(ctx)
    }

}

export async function getMicroApps(ctx) {
    const data = await ctx.Api.user.getMicroApps()
    console.log(data)
    if (data.err || data.errcode !== 0) {
        console.log(data.err)
    } else {
        const appList = parseMicroApps(data.appList);
        ctx.setState(preState => {
            const allapplistMetas = preState.meta.allapplistMetas
            allapplistMetas.isMicroApps = appList.isMicroApps
            allapplistMetas.corpId = appList.corpId
            allapplistMetas.microApps = _.merge(allapplistMetas.microApps, appList.microApps)
            debugger
            return preState
        })
    }
    
}

export async function getUserInfo(ctx, userid) {
    const userInfo = await ctx.Api.user.getPersonalInfo(userid)
    const oldState = ctx.getState()
    _.merge(oldState.meta.userInfo, userInfo)
    console.log(userInfo)
    ctx.setState(oldState)
}

export  function getUserId(ctx) {
    dd.ready(function() {
        (async () => {
            try {
                const auth = await Ding.sync(dd.runtime.permission.requestAuthCode)
                const useInfo = await ctx.Api.user.getUserId(auth.code)
                console.log(useInfo)
                ctx.setState({ userId: useInfo.userid})
                getUserInfo(ctx, useInfo.userid)
            }catch (err) {
                console.log(err)
            }
        })()
    })
}
