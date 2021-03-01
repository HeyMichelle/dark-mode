import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const savedValue = window.localStorage.getItem(key)
        const parsedValue = JSON.parse(savedValue)
        return(parsedValue ?? initialValue)
    });


    function setValue(newData) {
        setStoredValue(newData);
        window.localStorage.setItem(key, JSON.stringify(newData));
    }

    return [storedValue, setValue];
}


    
//     const useLocalStorage = (key, initialValue) => {
//         const [storedValue, setStoredValue] = useState(() => {
//           const item = window.localStorage.getItem(key);
//           return item ? JSON.parse(item) : initialValue;
//         });
//         const setValue = value => {
//           setStoredValue(value);
//           window.localStorage.setItem(key, JSON.stringify(value));
//         };
//         return [storedValue, setValue];
//       };
// }


// const [storedValue, setStoredValue] = useState(() => {
//     // Is the item in local storage?
//     if (window.localStorage.getItem(key)) {
//       // if yes, intialize useState with it
//       return JSON.parse(window.localStorage.getItem(key));
//     }
//     // otherwise, take our initial value and save it to localStorage
//     window.localStorage.setItem(key, JSON.stringify(initialValue));
//     return initialValue;
//   });


// - We're going to set up some state here. Set up a state property called storedValue.
//   - This state property is going to take a function as it's initial value. When we do this, whatever that callback function returns is what gets set as the intialValue for the state property.
//   - In the callback function, we'll check to see if the item we passed in already exists in localStorage, and return that value, otherwise we'll return whatever initialValue was passed in.
//   - Quick note, if you pass in arrays or objects to localStorage, you will need to parse it into JSON. Then when you retrieve it, like we do below, you'll need to parse it back into regular JavaScript
