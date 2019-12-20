import React from 'react'
import score from './pathfinderCalendar.json'
import Calendar from './Calendar'
import Progress from './Progress'
import progress from './pathfinderProgress.json'

const Projects = () => {
    let reversedScroe = score.reverse();    
    return (
        <React.Fragment>
            <Progress progress={progress} file={progress.file}/>
            <Calendar score={reversedScroe}/>
        </React.Fragment>
    )
}

export default Projects
