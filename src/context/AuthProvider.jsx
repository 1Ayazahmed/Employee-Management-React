
import React, {createContext,useEffect,useState} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();
// localStorage.clear();

const AuthProvider = ({children}) => {
  const  [UserData,setUserData] = useState(null);


  useEffect(()=>{
    setLocalStorage();
  const {employees} = getLocalStorage();

    setUserData(employees);
  },[])
  

  return (
    <AuthContext.Provider value={[UserData,setUserData]} >
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider