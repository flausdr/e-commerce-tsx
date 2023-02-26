import { useState, useEffect } from 'react';

import { ReactComponent as Moon } from '../../../assets/moon.svg';
import { ReactComponent as Sun } from '../../../assets/sun.svg';

const Theme = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.body.className = theme
    }, [theme])

    return (
        <div className='flex basis-1/4 justify-around mr-6'>
            {
                theme === 'light' 
                    ? <Sun className='cursor-pointer' width='30px' height='30px' onClick={() => setTheme('dark')} /> 
                    : <Moon className='cursor-pointer' width='30px' height='30px' onClick={() => setTheme('light')} />
            }
        </div>
    )
}

export default Theme;