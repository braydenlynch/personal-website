// Body element for personal-website app
import React from 'react';
import { createUseStyles } from "react-jss";

function Body() {
    const classes = useStyles();
    return (
        <body>
            <div className={classes.introductionModule}>
                <div className={classes.introductionModuleTitle}>
                    <h2>Hello there!</h2>
                    <h6>I'm Brayden</h6>
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
        marginTop: "25%",
        '& h2': {
            paddingRight: "30px",
            marginBottom: "0px",
            fontSize: "64px",
        },
        '& h6': {
            paddingLeft: "20px",
            fontSize: "36px",
            marginTop: "20px",
        },
    },
    informationModule: {
        width: "50vw",
        height: "50vh",
        float: "right",
    },
});

export default Body;