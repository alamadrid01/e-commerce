import React, {useContext} from 'react'

 export const UserContext = React.createContext({})

 export const useGlobalContext =() =>{
    useContext(UserContext);
 }