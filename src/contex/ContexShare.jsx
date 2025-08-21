import React, { createContext, useState } from 'react'

export const tokenContext = createContext()


function ContexShare({children}) {
       const [token, setToken] = useState("");

  return (
   <tokenContext.Provider  value={{token, setToken}}> {children}</tokenContext.Provider>
  )
}

export default ContexShare