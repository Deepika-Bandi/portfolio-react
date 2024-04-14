import {useState} from 'react'

import prtflio from '../assets/skills/prtflio.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
    
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={prtflio} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-2xl font-bold">Deepika Bandi</h1>
                    <p class="text-xl font-bold text-gray-300">Full stack developer</p>
                    <p className="text-md font-light text-gray-400 ">I m a self-taught Front End developer Hailing from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices..</p>
                </div>        
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/Deepika-Bandi' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://www.linkedin.com/in/deepika-bandi' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}