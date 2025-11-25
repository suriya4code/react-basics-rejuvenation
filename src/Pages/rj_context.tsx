import React, { createContext, useEffect, useState } from 'react'
import ContextPage1 from './context_sub_pages/context_page1'
import '../styles/context.css'

export const TextContext = createContext('');

const RjContext = () => {
    const [text, setText] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <TextContext.Provider value={text}>
            <div className='context'>
                <input 
                    className='context-input' 
                    type="text" 
                    placeholder="Type something..." 
                    onChange={handleInputChange} 
                />
                <ContextPage1 />
            </div>
        </TextContext.Provider>
    );
}
export default RjContext;
