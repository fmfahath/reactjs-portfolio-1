import projectImg1 from '../assets/proj-1.png';
import projectImg2 from '../assets/proj-2.png';
import projectImg3 from '../assets/proj-3.png';

export default function Projects() {
    return (
        <section className='px-5 py-10 bg-secondary'>
            <div className='flex justify-center mb-10'>
                <h1 className='text-white text-4xl font border-b-[2px] tracking-wide'> Recent Projects </h1>
            </div>
            <div className='flex flex-row justify-center gap-5'>
                <div className='p-2 bg-white rounded-xl'>
                    <img src={projectImg1} className='rounded-xl'></img>
                </div>
                <div className='p-2 bg-white rounded-xl'>
                    <img src={projectImg2} className='rounded-xl'></img>
                </div>
                <div className='p-2 bg-white rounded-xl'>
                    <img src={projectImg3} className='rounded-xl'></img>
                </div>
            </div>
        </section>
    )
}