
import React, {createContext,useEffect,useState} from 'react'
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const  [UserData,setUserData] = useState(null);

  const {employees,admin} = getLocalStorage();

  useEffect(()=>{
    setUserData({employees,admin});
  },[])
  

  return (
    <AuthContext.Provider value={UserData} >
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider