import { useState, createContext, useMemo } from 'react';

const NewsContext = createContext(); 

const ContextProvider = (props) => {
    const [newsdetail, setNews] = useState('');

const value = useMemo(
   () => ({newsdetail, setNews}),[newsdetail])


    return (
        <NewsContext.Provider
            value={value}
        >
            {props.children}
        </NewsContext.Provider>
    );
}
export { NewsContext, ContextProvider };
