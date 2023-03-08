import { ReactComponent as Logo } from '../../assets/13.svg';
import { Link } from 'react-router-dom';

const LogoForm = () => {
    return (
        <div className='w-10 fixed top-5 left-5'>
            <Link to='/'>
                <Logo />
            </Link>
        </div>
    )
}

export default LogoForm;