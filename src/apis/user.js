
const user ={
    user: {
        namespace: 'users/',
        methods: {
            get: ( ) => ({ path: 'message' }),
            getPersonalInfo: (id) => ({ path: ['personal'], query: {userid: id} }),
            getUserId: (code) => ({ path: ['infos'], query: {code: code} }),
            getMicroApps: () => ({ path: 'apps'}),
            register: (data) => ({path:['register'], options:{
                method:'POST',                
                body:JSON.stringify(data),
            }}),
        }
    }
}

export default user


