import projectImg1 from '../assets/proj-1.png';
import projectImg2 from '../assets/proj-2.png';
import projectImg3 from '../assets/proj-3.png';

export default function Projects() {

    const config = {
        projects: [
            {
                image: projectImg1,
                description: "E-Commerce - Online Shopping Site with Admin Dash Board",
                link: "https://www.test.com/project1",
            },
            {
                image: projectImg2,
                description: "Creative Agency - Digital Designing Website using React JS Technology",
                link: "https://www.test.com/project1",
            },
            {
                image: projectImg3,
                description: "Web Development Site Portfolio with Responsive Design . Build Basic on Bootstrap Web Template",
                link: "https://www.test.com/project1",
            },
        ]
    }

    return (
        <section id='projects' className='flex flex-col justify-center items-center px-5 py-10 bg-secondary'>
            <div className='flex justify-center mb-10'>
                <h1 className='text-white text-4xl font border-b-[2px] tracking-wide'> Recent Projects </h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-5 w-3/4 '>
                {config.projects.map((project) => (
                    <div className='project-card'>
                        <img src={project.image} className='rounded-xl'></img>
                        <div className='project-card-layer hover:opacity-100'>
                            <p>{project.description}</p>
                            <a href={project.link} target='_blank' className='project-view-btn'>View</a>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}