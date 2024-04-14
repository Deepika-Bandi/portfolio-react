import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import react from "../assets/skills/react.svg"
import git from "../assets/skills/git.svg"
import html  from "../assets/skills/html.svg"
import java from "../assets/skills/java.svg"
import hr from "../assets/curve-hr.svg"
import css3 from "../assets/skills/css3.svg"
import bootstrap from "../assets/skills/bootstrap.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                
                <SkillCard name="bash"  img={bash} />
                <SkillCard name="javascript" img={javascript} />
                <SkillCard name="html"  img={html} />
                <SkillCard name="react"  img={react} />
                <SkillCard name="git"  img={git} />
                <SkillCard name="java"  img={java} />
                <SkillCard name="css3"  img={css3} />
                <SkillCard name="bootstrap"  img={bootstrap} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}