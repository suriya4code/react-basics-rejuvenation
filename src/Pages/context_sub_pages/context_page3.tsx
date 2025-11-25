import React, { useContext } from 'react'
import { TextContext } from '../rj_context';

const ContextPage3 = () => {
    const text = useContext(TextContext);

    console.log("ContextPage3 Rendered");
    return (
        <div className='context-page'>
            <h3>Page 3</h3>
            <label className='context-label'>{text}</label>
            <p>This text is from the input box using useContext.</p>
        </div>
    );
}

export default ContextPage3