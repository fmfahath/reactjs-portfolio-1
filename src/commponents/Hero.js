import HeroImg from '../assets/4.png';
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";


export default function Hero() {
    return (
        <section className='flex flex-col md:flex-row justify-center items-center w-full h-screen px-5 bg-secondary text-white font-roboto-font'>
            <div className='flex flex-col w-full md:w-1/2 text-center md:text-left'>
                <h1 className='hidden md:block text-5xl md:text-7xl tracking-wider'>Hi, <br />
                    Im Fahath
                    <p className='text-2xl md:text-3xl tracking-wide'>Im  A  Full-Stack Developer</p>
                </h1>
                {/* mobile view */}
                <h1 className='block md:hidden text-5xl md:text-7xl tracking-wider'>Hi, Im Fahath
                    <p className='text-2xl md:text-3xl tracking-wide'>Im  A  Full-Stack Developer</p>
                </h1>
                <div className='flex flex-row justify-center md:justify-start gap-5 mt-5'>
                    <a href='#'><FaTwitter size={25} className='hover:text-blue-500' /></a>
                    <a href='#'><FaFacebook size={25} className='hover:text-blue-500' /></a>
                    <a href='#'><FaLinkedin size={25} className='hover:text-blue-500' /></a>
                </div>
            </div>
            <img src={HeroImg} className='w-1/2 mt-10 md:w-1/3 md:mt-0 '></img>
        </section>
    )
}