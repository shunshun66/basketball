
import jsapi from './jsapi.json';

const { corpId, AUTH_URL, APP_URL } = require(`config/${ENV}.json`);
const corpInfo = {corpId: corpId}
class DingClient {

    sync( dingtalkFunciton, parameter ){
        return new Promise( (resolve, reject) => {
            parameter={ ...parameter, ...corpInfo, 
                onSuccess: res => { resolve(res) },
                onFail: err => { reject(err) } 
            };
            
            dingtalkFunciton( parameter );
        })
    }

    ddConfig(){
        return new Promise( (resolve, reject) => {
            let jsapiArr= new Array();
            for (var i in jsapi ) { jsapi[i]
                ? jsapiArr.push(i)  
                : ""  
            };      

            ( async () => { 
                const res = await fetch("api/sign",  {   
                    method:"post", 
                    headers: {  
                        'Accept': 'application/json', 
                        'Content-Type': 'application/json', 
                    },  
                    body:JSON.stringify(APP_URL)
                });
                const text= await res.text();
                const data= JSON.parse(text)
                console.log(data)
                dd.config({            
                    agentId: data.agentId,
                    corpId: data.corpId,
                    timeStamp:data.timeStamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: jsapiArr
                })

                dd.error( function (error) { 
                    reject("DingTalk jsApi concent : ",JSON.stringify(error)) 
                });

                dd.ready( function () { 
                    resolve('DingTalk jsApi concent  ok: ') 
                });

            })();
        });
    };

    getUserInfo() {
        const self = this
        return new Promise( (resolve, reject) => {
            dd.ready( function() {
                (async () => {
                    try {
                        const auth = await self.sync(dd.runtime.permission.requestAuthCode)
                        const res = await fetch("api/users/infos?code=" + auth.code,  {   
                            method:"get", 
                            headers: {  
                                'Accept': 'application/json', 
                                'Content-Type': 'application/json', 
                            }
                        });
                        console.log(res)
                        resolve(res)
                    }catch(err) {
                        console.log(err)
                        reject(err)
                    }
                    
                })()
            })
        })
    }
};

export default new DingClient();
   