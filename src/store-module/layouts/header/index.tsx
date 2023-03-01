import { Link } from 'react-router-dom';

import Personal from './personality';
import Language from './language';
import Theme from './theme';

import { ReactComponent as Bird } from '../../assets/bird.svg';

const Header = () => {
    return (
        <div className='flex h-auto items-end justify-start py-8'>
            <div className='basis-1/5 flex justify-center items-end'>
                <Theme />
                <Language />
            </div>
            
            <Link to='/' className='basis-2/5'>
                <h1 className='pl-10 text-5xl font-semibold flex justify-start'>
                    <Bird width={25} height={25} className='-top-1 -left-2 relative' />
                    M13
                </h1>
            </Link>

            <Personal />
        </div>
    )
}

export default Header;