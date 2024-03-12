import React, { useEffect } from "react";
import { createContext, useState } from "react";
import jsonServer from '../../../db'
import axios from "axios";

export const Context = createContext();

export default function ContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [error,setError] = useState(null)
  const [data, setData] = useState([]);
  const [name,setName] = useState("")

  async function fetchData(){
    try {
      const res = await axios.get("https://private-json-data.onrender.com/items")
      setData(res.data)
      
      // console.log(res.data)
    } catch (error) {
      console.log(error);
      setError(error)
    }
  }

  useEffect(() => {
    // const shopItem = jsonServer;
    // setData(shopItem);
    fetchData()
  }, []);

  return(
    <Context.Provider value={{isAuth,setIsAuth,setError,error,data,setData,name,setName}}>
        {children}
    </Context.Provider>
  )
}
