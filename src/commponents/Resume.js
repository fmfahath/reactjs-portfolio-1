import resumeImg from '../assets/resume.jpg';

export default function Resume() {
    return (
        <section id='resume'>
            <div className='flex flex-col md:flex-row justify-center items-center  gap-5 md:gap-5 px-5 py-5 md:py-10 bg-primary'>
                <div className='flex justify-center  w-1/2 md:w-1/3 '>
                    <img src={resumeImg} className='w-1/2 md:w-3/4'></img>
                </div>
                <div className=' text-white text-center md:text-left '>
                    <h2 className='text-4xl md:text-5xl'>Resume</h2>
                    {/* <p className='text-lg md:text-xl tracking-widest border-b-[2px] w-[230px] ml-auto mr-auto md:ml-0 md:mr-0 md:w-[250px]'>Professional Developer</p> */}
                    <div className='mt-2'>
                        <p>Here, You can view my updated resume..</p>
                        <button className='bg-white text-blue-950 font-medium px-3 py-2 rounded-full mt-5 hover:bg-blue-950 hover:text-white'>Download CV</button>

                    </div>
                </div>
            </div>
        </section>
    )
}