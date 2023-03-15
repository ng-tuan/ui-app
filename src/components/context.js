import React from "react";
import { data } from "../EmployeeData";

export const StateContext = React.createContext()

export const StateProvider = ({children}) => {
    let source = data
    return (
        <StateContext.Provider
            value={{
                source
            }}
        >
            {children}
        </StateContext.Provider>
    )
}