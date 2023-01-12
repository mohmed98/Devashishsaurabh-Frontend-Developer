import * as types from "./actionType"
const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    totalpages:0,
  };
  const reducer=(state = initialState, {type,payload})=>{
    switch(type){
      case types.GET_DATA_REQUEST:{
        return{
          ...state,
          isLoading: true,
          isError: false,
        }
      }
      case types.GET_DATA_SUCCESS:{
        return{
          ...state,
          data: payload.data,
          isLoading: false,
          isError: false,
          totalpages: payload.pages
        }
      }
      case types.GET_DATA_FAILURE:{
        return{
          ...state,
          isLoading: false,
          isError: true,
        }
      }
      default:return state;

    }
  }
  export { reducer };