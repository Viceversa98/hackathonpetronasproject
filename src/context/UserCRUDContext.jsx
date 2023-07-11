import { createContext, useContext ,useEffect} from "react";

const UserCRUDContext = createContext();


// eslint-disable-next-line react/prop-types
export function UserCRUDContextProvider({children}) {

    useEffect(()=>{

    })
    
    // end of code

  const value = {
  
  };
    
    return (
        <UserCRUDContext.Provider value={value}>
          {children}
        </UserCRUDContext.Provider>
      );
}


// eslint-disable-next-line react-refresh/only-export-components
export function useUserCRUD() {
    return useContext(UserCRUDContext);
  }
  