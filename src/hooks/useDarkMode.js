import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useDarkMode(key, initialValue) {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect (() => {
        const pageBody = document.querySelector('body');
        darkMode ? pageBody.classList.add('dark-mode') : pageBody.classList.remove('dark-mode');
        console.log('useEffect has been run');
    }, [darkMode]);


    return [darkMode, setDarkMode];

}