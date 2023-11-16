import * as types from "../actionsTypes/authActionsTypes";

const loginUser = (payload)=>{
  return{
    type: types.USER_LOGIN,
    payload
  }
};

const logoutUser = () =>{
   return{
    type: types.SIGN_OUT_USER,
   }
}



export const signInUser = (email,password) =>(dispatch) =>{

  console.log(email,password)

}
export const signUpUser = (name,email,password) =>(dispatch) =>{

  console.log(name,email,password)

}
export const signOutUser = (name,email,password) =>(dispatch) =>{

  console.log(name,email,password)

}
