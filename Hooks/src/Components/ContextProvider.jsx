import { createContext, useState } from 'react';

export const AppContext = createContext();

function AppContextProvider() {
    const [state, setState] = useState(false);
    const style = {
        backgroundColor: state == true ? 'black' : 'yellow',
        color: state == true ? 'orange' : 'blue',
        padding: '10px',
        textAlign: 'center',
    };
    return (
        <AppContext.Provider
            value={{ state: state, ContextStyle: style, setterFn: setState }}
        >
        </AppContext.Provider>
    );
}

export default AppContextProvider;