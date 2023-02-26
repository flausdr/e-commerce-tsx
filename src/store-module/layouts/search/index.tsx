import { useRef } from 'react';

import { ReactComponent as SearchCircle } from '../../assets/search.svg';

const Search = () => {
    const myRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        myRef.current?.focus();
    }

    return (
        <div className='flex basis-1/4 justify-center'>  
            <input type="text" ref={myRef} className='bg-transparent outline-none border-b-white border-b-2 mr-3 pl-3' />
            <SearchCircle width={20} height={20} className="cursor-pointer relative -bottom-1" onClick={() => handleClick()} />
        </div>
    )
}

export default Search;