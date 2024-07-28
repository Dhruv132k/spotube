import { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider>
        {children}
    </DataLayerContext.Provider>
) //the children in the component in DataLayer tag in index,js i.e. App refer to onenote ContextAPI page