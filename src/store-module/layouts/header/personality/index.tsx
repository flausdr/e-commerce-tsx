import { ReactComponent as Cart } from '../../../assets/cart.svg';
import { ReactComponent as Likes } from '../../../assets/heart.svg';
import { ReactComponent as Cabinet } from '../../../assets/profile.svg';

const Personal = () => {
    return (
        <div className='flex basis-2/5 justify-end pr-16'>
            <div className='flex ml-16'>
                <Cabinet width='30px' height='30px' className='cursor-pointer user' />
                <Likes width='30px' height='30px' className='ml-5 cursor-pointer' />
                <Cart width='30px' height='30px' className='ml-5 cursor-pointer' />
            </div>
        </div>
    )
}

export default Personal;