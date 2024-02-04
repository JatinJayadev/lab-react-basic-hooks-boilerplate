import { useContext } from 'react';
import { AppContext } from './ContextProvider';

function Progression6() {
    const value = useContext(AppContext);
    console.log(value);



    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick={() => value.setterFn(!value.state)}>Toggle</button>

            <div style={value.ContextStyle}>
                <p>This is made by kalvium</p>
            </div>
        </div>
    );
}

export default Progression6