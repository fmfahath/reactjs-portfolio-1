import { Bars3Icon } from '@heroicons/react/24/solid'


export default function Header() {
    return (
        <header className="flex justify-between px-3 py-3 text-xl bg-primary">
            <a href="#" className="text-white font-bold text-3xl">CODE-FM</a>
            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Peojects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            {/* Moble view nav */}
            <nav className="block md:hidden ">
                <ul className="flex flex-col text-white mobile-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Peojects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <button className='block md:hidden'><Bars3Icon className='text-white h-7'></Bars3Icon></button>
        </header>
    )
}

