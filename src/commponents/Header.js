import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'


export default function Header() {
    const [toggleBtn, setToggleBtn] = useState(false);

    return (
        <header className="flex justify-between px-3 py-3 text-xl bg-primary">
            <a href="#" className="text-white font-bold text-3xl"><i>CODE-FM</i></a>
            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li><a href="/" className='hover:border-white hover:border-b-2'>Home</a></li>
                    <li><a href="#about" className='hover:border-white hover:border-b-2'>About</a></li>
                    <li><a href="#projects" className='hover:border-white hover:border-b-2'>Projects</a></li>
                    <li><a href="#resume" className='hover:border-white hover:border-b-2'>Resume</a></li>
                    <li><a href="#contact" className='hover:border-white hover:border-b-2'>Contact</a></li>
                </ul>
            </nav>

            {/* Moble view nav */}
            {toggleBtn && <nav className="block md:hidden ">
                <ul onClick={() => setToggleBtn(!toggleBtn)} className="flex flex-col text-white mobile-nav">
                    <li className='hover:bg-white hover:text-violet-950 hover:font-semibold'><a href="/" >Home</a></li>
                    <li className='hover:bg-white hover:text-violet-950 hover:font-semibold'><a href="#about" >About</a></li>
                    <li className='hover:bg-white hover:text-violet-950 hover:font-semibold'><a href="#projects" >Projects</a></li>
                    <li className='hover:bg-white hover:text-violet-950 hover:font-semibold'><a href="#resume" >Resume</a></li>
                    <li className='hover:bg-white hover:text-violet-950 hover:font-semibold'><a href="#contact" >Contact</a></li>
                </ul>
            </nav>}
            <button onClick={() => setToggleBtn(!toggleBtn)} className='block md:hidden'><Bars3Icon className='text-white h-7'></Bars3Icon></button>
        </header >
    )
}

