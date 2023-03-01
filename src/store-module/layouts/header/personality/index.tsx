import { Link } from 'react-router-dom';

import { ReactComponent as Cart } from '../../../assets/cart.svg';
import { ReactComponent as Cabinet } from '../../../assets/profile.svg';
import { ReactComponent as Likes } from '../../../assets/heart.svg';

const Personal = () => {
    return (
        <div className='flex basis-2/5 justify-end pr-16'>
            <div className='flex ml-16'>
                <Link to='/my-account'>
                    <Cabinet width='30px' height='30px' className='cursor-pointer user' />
                </Link>
                <Link to='/wishlist'>
                    <Likes width='30px' height='30px' className='ml-5 cursor-pointer' />
                </Link>
                <Link to='/cart'>
                    <Cart width='30px' height='30px' className='ml-5 cursor-pointer' />
                </Link>
            </div>
        </div>
    )
}

export default Personal;