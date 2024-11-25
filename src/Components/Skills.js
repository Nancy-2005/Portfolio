import React from 'react'; 
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaJava, FaBrain, FaRobot } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiPhp, DiDatabase } from "react-icons/di";
import { SiExpress, SiMongodb, SiC, SiPhp } from "react-icons/si";

const Skills = ({ skill }) => {
    const icon = {
        React: <FaReact />,
        Javascript: <DiJavascript1 />,
        Node: <DiNodejs />,
        Express: <SiExpress />,
        MongoDb: <SiMongodb />,
        HTML: <FaHtml5 />,
        CSS: <FaCss3Alt />,
        PHP: <DiPhp />,
        C: <SiC />,
        Python: <FaPython />,
        Java: <FaJava />,
        "Artificial Intelligence": <FaBrain />, // Replace with a suitable icon
        "Machine Learning": <FaRobot />, // Replace with a suitable icon
        Database: <DiDatabase />, // Fallback for any database-related skill
    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill] || <span>{skill}</span>} {/* Show icon or fallback text */}
        </div>
    );
};

export default Skills;