import cst from '../../../constants/constants'
import {signIn} from '../signin_page/signin_actions'
import axios from 'axios'

function getInfoRequest() {
    return (dispatch)=>{
        return axios.get('/account/getinfo')
            .then(res=>{
                console.log(res)
                dispatch(getInfo(res.data.kcoin_tt,res.data.kcoin_kd,res.data.listNaptien,res.data.listRuttien,res.data.user_address,res.data.num_user,res.data.is_admin))
                dispatch(signIn(res.data.wallet,"DANG_NHAP_THANH_CONG",res.data.is_admin))
            })
            .catch(err=>{
                console.log(err)
            })
    }
}
function getInfo(kcointt,kcoinkd,receive_transactions,listRuttien,user_address,num_user,is_admin) {
    return {type:cst.GET_INFO,kcointt,kcoinkd,receive_transactions,listRuttien,user_address,num_user,is_admin}
}

module.exports = {getInfoRequest}