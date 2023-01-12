import axios from "axios";
import * as types from "./actionType"

export const fetchdata=(status,launch,type)=>(dispatch)=>{
    dispatch({type: types.GET_DATA_REQUEST})
    return axios.get(`https://api.spacexdata.com/v3/capsules?status=${status}&type=${type}&original_launch=${launch}`)
    .then((res)=>{
        let length=res.data.length
        let totalpages=Math.ceil(length/10)
        dispatch({type: types.GET_DATA_SUCCESS,payload:{data:res.data,pages:totalpages}})
    })
}
