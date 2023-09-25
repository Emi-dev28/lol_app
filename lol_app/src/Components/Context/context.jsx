import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import Data  from "../../Mocks/data.json";
const Context = createContext();
const context = ({children}) => {
  const [user, setUser] = useState({ name: "", league_id: "", lvl: "60" });
  const [tier, setTier] = useState({ tier: "", rank: "" });
  const [loading, setLoading] = useState(false)
  console.log("Este es el contexto")
    useEffect(() =>{
      try{
        console.log(user)
        setLoading(true);
        console.log(Data[0])
        setUser({name: Data[0].summonerName, league_id: Data[0].leagueId, lvl: "62"})
        setTier({tier: Data[0].tier, rank: Data[0].rank })
      }
      catch(e){
        console.log(e);
      }
      finally{
        setLoading(false)
    }
    },[user.name])
  return <Context.Provider value={{user, setUser, tier, setTier}}>
{children}
  </Context.Provider>;
};

export default context;
export const useContextGlobal = () => useContext(Context);
