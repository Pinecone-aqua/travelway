import { createContext, useState } from "react";

export const AdminContext= createContext('')


export default function AdminProvider({children}):JSX.Element{
    const [admin,setAdmin]=useState()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
     
    
    }
    return(


        <AdminContext.Provider value={{handleSubmit, admin}}>
            {children}
        </AdminContext.Provider>
    )
}