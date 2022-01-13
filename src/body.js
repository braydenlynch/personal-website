// Body element for personal-website app
import React from 'react';
import { createUseStyles } from "react-jss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';

function Body() {
    const classes = useStyles();
    return (
        <body>
            <div className={classes.introductionModule}>
                <div className={classes.introductionModuleTitle}>
                    <h2>Hello there!</h2>
                    <h6>I'm Brayden</h6>
                    <p>I am driven to contribute to beautiful and powerful tech.</p>
                    <div className={classes.introductionModuleIcons}>
                        <a href="https://github.com/braydenlynch" target="_blank">
                            <IconContext.Provider value = {{ className: classes.githubIcon}}>
                                <FaGithub />
                            </IconContext.Provider>
                        </a>
                        <a href="https://www.linkedin.com/in/braydenlynch/" target="_blank">
                            <IconContext.Provider value = {{ className: classes.linkedinIcon}}>
                                <FaLinkedin />
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
            </div>
            <div className={classes.informationModule}>
                <div className={classes.informationModuleTechnicalSkills}>
                    <div className={classes.technicalSkillsText}>
                        <p>My development focus is on web applications. I have experience in many projects for front-end design, and also backend functionality. The current web development languages I use are:
                            <ul>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>PHP</li>
                                <li>CSS</li>
                                <li>SQL</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className={classes.informationModuleWorkExperience}>
                    <div className={classes.workExperienceText}>
                        <p>I am working at DXC Technology, and I have streamlined many processes and gained many skills. I have lead projects related to revitalising records management, developed new processes for document cataloguing and directed colleagues to use these new processes. Additionally, I have created work instructions and guides for the newly created processes.</p>
                    </div>
                </div>
            </div>
        </body>
    )
}

const useStyles = createUseStyles({
    body: {
        fontFamily: "Segoe UI",
        backgroundColor: "#ECF0F1",
    },
    introductionModule: {
        width: "50vw",
        height: "100vh",
        backgroundColor: "#34495E",
        color: "#FAFAFA",
        float: "left",
    },
    introductionModuleTitle: {
        marginTop: "15%",
        '& h2': {
            paddingRight: "15%",
            marginBottom: "0px",
            fontSize: "64px",
        },
        '& h6': {
            paddingLeft: "15%",
            fontSize: "36px",
            marginTop: "2.5%",
            fontWeight: "lighter",
        },
        '& p': {
            marginTop: "20%",
            fontSize: "18px",
        },
    },
    introductionModuleIcons: {
        marginTop: "20%",
    },
    githubIcon: {
        color: "#e8eaea",
        fontSize: "30px",
        paddingRight: "0.5%",
    },
    linkedinIcon: {
        color: "#00a0dc",
        fontSize: "30px",
        paddingLeft: "0.5%",
    },
    informationModule: {
        width: "50vw",
        height: "100vh",
        float: "right",
    },
    informationModuleTechnicalSkills: {
        height: "50%",
        width: "100%",
        backgroundColor: "#ECF0F1",
    },
    technicalSkillsText: {
        display: "flex",
        justifyContent: "left",
        marginLeft: "2%",
        marginRight: "2%",
        alignItems: "center",
        height: "100%",
        width: "96%",
        '& p': {
            marginTop: "0px",
            textAlign: "left",
        },
    },
    informationModuleWorkExperience: {
        height: "50%",
        width: "100%",
        backgroundColor: "rgba(248, 127, 62, 0.88)",
    },
    workExperienceText: {
        display: "flex",
        justifyContent: "left",
        marginLeft: "2%",
        marginRight: "2%",
        alignItems: "center",
        height: "100%",
        width: "96%",
        color: "#FAFAFA",
        '& p': {
            marginTop: "0px",
            textAlign: "left",
        },
    },
});

export default Body;