import PageConst from './PageConst';

export default {
    defaults(props) {
        //初始的state
        return {   empty: false, loading: true,  ...PageConst, 
        }
    },
    getUsers( ctx, data ) {
        (async () => {
            const data = {
                name: '财务部'
            }
            const res = await fetch("/api/users/create",  {   
                method:"post", 
                headers: {  
                    'Accept': 'application/json', 
                    'Content-Type': 'application/json', 
                },  
                body:JSON.stringify(data)
            });
            const text= await res.text();
            const msg= JSON.parse(text)
            console.log(msg)
        })();

    },

};
