export const getAllUser=()=>{
    //console.log("first req comes to actions")
    return {
        type:"getAll",
        users:[]
    }
}
export const deleteUser=(id)=>{
    //console.log("first req comes to actions")
    return {
        type:"deleteUser",
        id:id
    }
}
