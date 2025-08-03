import { useState, useEffect } from 'react';

export function useLocalStorageState(key, initialValue) {
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem(key);
        if (saved !== null) {
            return JSON.parse(saved);
        }
        return initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}
