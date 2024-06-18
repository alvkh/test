import axios from "axios"
import url from "~/config/url/url"
export const useloginStore = defineStore("useloginStore",{
    state:()=>{
        return{
            steps : 1,
            datas : [],
            phone_numbers : null,
            emails : null,
            user_names : null,
            loadings : false,
            addresss : null,
            fetchdatas : null,
            passwords:null,
            postals:null,
            logins:false,
        }
    },
    getters:{
        step : (state) => state.steps,
        email : (state) => state.emails,
        data : (state) => state.datas,
        user_name : (state) => state.user_names,
        address : (state) => state.addresss,
        password : (state) => state.passwords,
        phone_number : (state) => state.phone_numbers,
        postal : (state) => state.postals,
        fetchdata : (state) => state.fetchdatas,
        loading : (state) => state.loadings,
        login : (state) => state.logins,
    },
    actions:{
        next_step(step){
            this.steps = step
        },
        login_modal(){
            this.logins = !this.logins
        },
        saveto_local(personal){
            localStorage.setItem('personal',JSON.stringify(personal))
        },
        fetch(id){
            this.loadings = true
            const config = {
                url : url.fetchstore + '/' + id,
                method : 'get',
            }           
            new Promise((resolve,reject)=>{
                axios(config).then((res)=>{
                    this.loadings = false
                    this.fetchdatas = res.data
                    console.log(res.data)
                    resolve(res)
                })
                .catch((err)=>{
                    this.loadings = false
                    console.log(err);
                    reject(err)
                })
            })
        }
    }


})