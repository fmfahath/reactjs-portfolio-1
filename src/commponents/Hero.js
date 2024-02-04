import HeroImg from '../assets/4.png'


export default function Hero() {
    return (
        <section className='flex justify-center items-center w-full h-screen px-5 py-32 bg-secondary text-white font-roboto-font'>
            <h1 className='w-1/2 text-7xl tracking-wider'>Hi, <br />
                Im Fahath
                <p className='text-3xl tracking-wide'>Im  A  Full-Stack Developer</p>
            </h1>
            <img src={HeroImg} className='w-1/3 '></img>
        </section>
    )
}