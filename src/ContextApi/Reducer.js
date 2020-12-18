import React,{useState,createContext} from "react";


export const AppContext = createContext();  //m c

export const AppProvider = props => {

    const [showContact,setShowContact] = useState(false);
    const [showNav,setShowNav] = useState(false);

    console.log(showNav);

    return (
        <AppContext.Provider value={{contact:[showContact,setShowContact],MobileNavigation:[showNav,setShowNav]}}>
            {props.children}
        </AppContext.Provider>
    )
}