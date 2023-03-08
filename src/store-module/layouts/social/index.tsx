import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';
import { ReactComponent as Telegram } from '../../assets/telegram.svg';

const Social = () => {
    return (
        <div className='flex gap-5 mx-auto'>
            <a href="https://t.me/flausdr" target='_blank' rel='noreferrer'>
                <Telegram width='30px' height='30px' className='cursor-pointer hover:fill-zinc-600' />
            </a>
            <a href="https://github.com/flausdr" target='_blank' rel='noreferrer'>
                <Github width='30px' height='30px' className='cursor-pointer hover:fill-zinc-600' />
            </a>
            <a href="https://www.linkedin.com/in/maks-rychkov-86bb93246/" target='_blank' rel='noreferrer'>
                <Linkedin width='30px' height='30px' className='cursor-pointer hover:fill-zinc-600' />
            </a>
        </div>
    )
}

export default Social;