import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <section className="flex flex-col  justify-center items-center text-center md:flex-row md:justify-evenly  md:text-left px-10 py-10 bg-secondary text-white">
            <div>
                <p className="text-3xl mb-5">Contact</p>
                <div className="flex flex-col gap-3 md:gap-0">
                    <div className="flex flex-col md:flex-row md:gap-5">
                        <p>Email :</p>
                        <p>Fmfahath@example.com</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-5">
                        <p>Phone :</p>
                        <p>+9475757575</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center md:justify-center items-center gap-10 mt-10'>
                <a href='#'><FaTwitter size={30} className='hover:text-sky-500' /></a>
                <a href='#'><FaFacebook size={30} className='hover:text-sky-500' /></a>
                <a href='#'><FaLinkedin size={30} className='hover:text-sky-500' /></a>
            </div>
        </section>
    )
}