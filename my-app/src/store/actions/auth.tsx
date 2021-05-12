
import { toast } from 'react-toastify'
import * as actionTypes from './actionTypes'

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  }
}

export const authSuccess = (idToken:any,userId:any) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: idToken,
    userId: userId,
  }
}



export const authFail = (error:any) => {
  return (dispatch:any) => {
    dispatch({
      type: actionTypes.AUTH_FAIL,
      error: error,
    })
    toast.error(error.message)
  }
}

export const auth = (email:any, password:any, isSignUp:any,userName:any)=>{
  return{
    type:actionTypes.AUTH,
    payload: {email, password,isSignUp}
  }

}

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  }
}

export const checkAuthTimeout = (expirationTime:any) => {
  return (dispatch:any) => {
    setTimeout(() => {
      dispatch(logout())

    }, expirationTime * 1000)

  }
}
