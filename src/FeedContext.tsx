import React, {createContext, useContext, useState,  ReactNode} from 'react'

export interface FeedData {
    feedDetails : any
}

interface FeedDataContextValue {
    data : FeedData;
    setData : React.Dispatch<React.SetStateAction<FeedData>>
}

const FeedContext = createContext<FeedDataContextValue | undefined>(undefined);

interface FeedProviderProps {
    children: ReactNode;
    initialValue: FeedData
}

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
