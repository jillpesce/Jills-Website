import React from 'react';
import useDarkMode from 'use-dark-mode';

import DarkModeToggle from "react-dark-mode-toggle";


const DarkMode = () => {
    const darkMode = useDarkMode(false);

    return (
        <div class="toggle">
            <DarkModeToggle 
                checked={darkMode.value} 
                onChange={darkMode.toggle}
                size={'10rem'}
            />
        </div>
    );
};

export default DarkMode;