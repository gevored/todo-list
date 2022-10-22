import {  createContext, useState} from "react";

export const contextDashBoard =  createContext()

export function DashBoardContext({children}){
    
    const [listTask, setListTask] = useState([])

    return(
        <contextDashBoard.Provider value={{listTask, setListTask} }>
            {children}
        </contextDashBoard.Provider>
    )
}
