import { useState, useRef, useCallback, useEffect } from 'react';
var useDropdown = function () {
    var _a = useState(false), dropdownOpen = _a[0], setDropdownOpen = _a[1];
    var wrapperRef = useRef(null);
    var toggleDropdown = useCallback(function () {
        setDropdownOpen(!dropdownOpen);
    }, [dropdownOpen]);
    var closeDropdown = useCallback(function () {
        setDropdownOpen(false);
    }, []);
    var handleClick = function (e) {
        if (wrapperRef && wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            setDropdownOpen(false);
        }
    };
    useEffect(function () {
        document.addEventListener('click', handleClick);
        return function () { return document.removeEventListener('click', handleClick); };
    }, []);
    return [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown];
};
export default useDropdown;
//# sourceMappingURL=index.js.map