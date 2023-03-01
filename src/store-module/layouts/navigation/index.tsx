import Search from "../search";

import './style.scss';

const Navigation = () => {
    return (
        <div className="flex justify-center items-end py-8">
            <ul className="flex w-screen basis-3/4 justify-around pr-20">
                <li className="text-2xl nav-li cursor-pointer">Catalog</li>
                <li className="text-2xl nav-li cursor-pointer">About us</li>
                <li className="text-2xl nav-li cursor-pointer">Contacts</li>
            </ul>

            <Search />
        </div>
    )
}

export default Navigation;