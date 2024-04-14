import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import Bash from "../assets/certs/Bash.png"
import java from "../assets/certs/Java.png"
import Bootstrap from "../assets/certs/Bootstrap.png"
import CSS from "../assets/certs/CSS.png"
import Git from "../assets/certs/Git.png"
import Html from "../assets/certs/Html.png"
import  Javascript from "../assets/certs/Javascript.png"
import Junit from "../assets/certs/Junit.png"
import Reactjs from "../assets/certs/Reactjs.png"
import Sql from "../assets/certs/Sql.png"

// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Certified in Java programming" img={java} issued="TATA STRIVE" date="Feb 2024" />
                <CertCard name="Certified in Sql" img={Sql} issued="TATA STRIVE" date="April 2024" />
                <CertCard name="Certified in Html" img={Html} issued="TATA STRIVE" date="Feb 2024" />
                <CertCard name="Certified in CSS" img={CSS} issued="TATA STRIVE" date="Feb 2024" />
                <CertCard name="Certified in Javascript" img={Javascript} issued="TATA STRIVE" date="April 2024" />
                <CertCard name="Certified in ReactJS"img={Reactjs} issued="TATA STRIVE" date="April 2024" />
                <CertCard name="Certified in Bootstrap"img={Bootstrap} issued="TATA STRIVE" date="Feb 2024" />
                <CertCard name="Certified in Bash scripting"img={Bash} issued="TATA STRIVE"date="Jan 2024" />
                <CertCard name="Certified in Git" img={Git} issued="TATA STRIVE" date="Jan 2024" />
                <CertCard name="Certified in JUNIT" img={Junit} issued="TATA STRIVE" date="Feb  2024" />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
