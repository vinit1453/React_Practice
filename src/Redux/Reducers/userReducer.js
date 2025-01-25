const userReducer=(state={users:[],loading:false},action)=>{
    //after actionc,req comes to suitable reducer
    switch(action.type){
        case "getAll":
            return{...state,
             loading:true
            }
        case "deleteUser":
            
            return{...state}
       case "fetchUsers":
        //console.log("after actions,req comes to fetchUsers reducer",action)

        //not recomended
        ///state.users=action.res;

        //recomended way to change state
        return {...state,users:action.users,loading:false}
    default :
        return state;
}
}

export default userReducer;