import React, {createContext, useContext, useState,  ReactNode} from 'react'

// Create interface for feeds
export interface FeedData {
    feedDetails : any
}

// Create interface for Feed Data Context Value
interface FeedDataContextValue {
    data : FeedData;
    setData : React.Dispatch<React.SetStateAction<FeedData>>
}

//Set feed context to feed data context value type 
const FeedContext = createContext<FeedDataContextValue | undefined>(undefined);

// Create interface for Feed provider context
interface FeedProviderProps {
    children: ReactNode;
    initialValue: FeedData
}

// Create and export Feed Provider component
export function FeedProvider({children, initialValue } : FeedProviderProps){
    const [data, setData] = useState<FeedData>(initialValue)

    return(
        <FeedContext.Provider value = {{data, setData}}>
            {children}
        </FeedContext.Provider>
    )
}

export function useData() {
    const context = useContext(FeedContext);
    if(!context) {
        throw new Error('useData must be used within FeedProvider')
    }
    return context
}
