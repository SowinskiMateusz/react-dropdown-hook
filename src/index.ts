import { useState, useRef, RefObject, useCallback, useEffect } from 'react';

const useDropdown = (): [RefObject<HTMLDivElement>, boolean, (() => void), (() => void)] => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const wrapperRef: RefObject<HTMLDivElement> = useRef(null);

    const toggleDropdown = useCallback(() => {
        setDropdownOpen(!dropdownOpen);
    }, [dropdownOpen]);

    const closeDropdown = useCallback(() => {
        setDropdownOpen(false);
    }, []);

    const handleClick = (e: MouseEvent) => {
        if (wrapperRef && wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
            setDropdownOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    return [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown]
}

export default useDropdown();