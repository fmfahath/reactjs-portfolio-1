import projectImg1 from '../assets/proj-1.png';
import projectImg2 from '../assets/proj-2.png';
import projectImg3 from '../assets/proj-3.png';

export default function Projects() {
    return (
        <section className='flex flex-col justify-center items-center px-5 py-10 bg-secondary'>
            <div className='flex justify-center mb-10'>
                <h1 className='text-white text-4xl font border-b-[2px] tracking-wide'> Recent Projects </h1>
            </div>
            <div className='flex flex-row justify-center gap-5 w-3/4 '>
                <div className='project-card'>
                    <img src={projectImg1} className='rounded-xl'></img>
                    <div className='project-card-layer hover:opacity-100'>
                        <p>E-Commerce - Online Shopping Site with Admin Dash Board</p>
                        <button className='project-view-btn'>View</button>
                    </div>
                </div>
                <div className='project-card'>
                    <img src={projectImg2} className='rounded-xl'></img>
                    <div className='project-card-layer hover:opacity-100'>
                        <p>Creative Agency - Digital Designing Website using React JS Technology</p>
                        <button className='project-view-btn'>View</button>
                    </div>
                </div>
                <div className='project-card'>
                    <img src={projectImg3} className='rounded-xl'></img>
                    <div className='project-card-layer hover:opacity-100' >
                        <p>Web Development Site Portfolio with Responsive Design . Build
                            Basic on Bootstrap Web Template
                        </p>
                        <button className='project-view-btn'>View</button>
                    </div>
                </div>
            </div>
        </section>
    )
}