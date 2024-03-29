import aboutImg from '../assets/1.png';

export default function About() {

    const aboutMe = {
        para1: "Hi, I am Fahath, Professional full-stack developer with 3+ years of experience",
        para2: "I am specialized in Reat JS & React Native development",
        para3: "I design and code beautifully simple things and i love what i do. Just simple like that!",
    }
    return (
        <section id='about'>
            <div className='flex flex-col md:flex-row justify-center items-center  md:gap-10 px-5 py-5 md:py-10 bg-primary'>
                <div className='w-1/2 md:w-1/3'>
                    <img src={aboutImg}></img>
                </div>
                <div className=' text-white text-center md:text-left '>
                    <h2 className='text-4xl md:text-5xl'>About Me</h2>
                    <p className='text-lg md:text-xl tracking-widest border-b-[2px] w-[230px] ml-auto mr-auto md:ml-0 md:mr-0 md:w-[250px]'>Professional Developer</p>
                    <div className='mt-7'>
                        <p>{aboutMe.para1}</p>
                        <p>{aboutMe.para2}</p>
                        <p>{aboutMe.para3}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}