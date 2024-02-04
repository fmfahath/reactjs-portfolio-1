import aboutImg from '../assets/1.png';

export default function About() {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center  md:gap-10 px-5 py-5 md:py-10 bg-primary'>
            <div className='w-1/2 md:w-1/3'>
                <img src={aboutImg}></img>
            </div>
            <div className=' text-white text-center md:text-left '>
                <h2 className='text-4xl md:text-5xl'>About Me</h2>
                <p className='text-lg md:text-xl tracking-widest border-b-[2px] w-[230px] ml-auto mr-auto md:ml-0 md:mr-0 md:w-[250px]'>Professional Developer</p>
                <div className='mt-7'>
                    <p>Hi, I am Fahath, Professional full-stack developer with 3+ years of experience</p>
                    <p>I am specialized in Reat JS & React Native development</p>
                    <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                </div>
            </div>
        </div>
    )
}