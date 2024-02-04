import HeroImg from '../assets/4.png';
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";


export default function Hero() {
    return (
        <section className='flex justify-center items-center w-full h-screen px-5 bg-secondary text-white font-roboto-font'>
            <div className='flex flex-col w-1/2'>
                <h1 className='text-7xl tracking-wider'>Hi, <br />
                    Im Fahath
                    <p className='text-3xl tracking-wide'>Im  A  Full-Stack Developer</p>
                </h1>
                <div className='flex flex-row gap-5 mt-5'>
                    <a href='#'><FaTwitter size={25} className='hover:text-blue-500' /></a>
                    <a href='#'><FaFacebook size={25} className='hover:text-blue-500' /></a>
                    <a href='#'><FaLinkedin size={25} className='hover:text-blue-500' /></a>
                </div>
            </div>
            <img src={HeroImg} className='w-1/3 '></img>
        </section>
    )
}