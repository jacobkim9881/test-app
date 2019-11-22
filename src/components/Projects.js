import React from 'react'
import score from './pathfinderCalendar.json'

const Projects = () => {
    const projects = {        
        display: "flex",
        flexWrap: "wrap",
        width: "750px",
        margin: "auto"        
    }
    const dates = {
        width: "100px"
        
    }

    const percent = {
        color: "red"
    }
    return (
        <div>
            <h2 style={{align:"center"}}>Pathfinder : Kingmaker</h2>
            <h3 style={{align:"center"}}>November</h3>     
        <div style={projects}>                        
                    {score.map(x =>                    
                    <p style={dates}>
                    {x.date}<br />번역됨: result3 파일의 문장 12466개 중 {x.subs}개(<a style={percent}>{Math.trunc(x.subs/12466*100)}%</a>) 남음: {12466-x.subs}개
                    </p>
                    )}
        </div>
        </div>
    )
}

export default Projects
