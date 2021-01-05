import React,{useState,createContext} from "react";

interface IState {
    contact:any;
    MobileNavigation:any;
}

const initialValue:IState = {
    contact:[],
    MobileNavigation:[]
}
export const AppContext = createContext<IState>(initialValue);

export const AppProvider:React.FC = (props:any):JSX.Element => {

    const [showContact,setShowContact] = useState(false);
    const [showNav,setShowNav] = useState(false);


    return <AppContext.Provider  value={{contact:[showContact,setShowContact],MobileNavigation:[showNav,setShowNav]}}>
            {props.children}
        </AppContext.Provider>
    
}