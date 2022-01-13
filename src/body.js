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
                <div className={classes.technicalSkills}>
                    <p>Technical skills</p>
                </div>
                <div className={classes.workExperiences}>

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
    informationModule: {
        width: "50vw",
        height: "50vh",
        float: "right",
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
});

export default Body;