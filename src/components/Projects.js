import React from 'react'
import score from './pathfinderCalendar.json'

const Projects = () => {
    const projects = {
        width: "750px"
    }
    const dates = {
        display: "flex",
        width: "100px"
    }
    return (
        <div >      
                    {score.map(x =>                    
                    <p style={dates}>
                    {x.date}<br />번역됨: result3 파일의 문장 12466개 중 {x.subs}개({Math.trunc(x.subs/12466*100)}%) 남음: {12466-x.subs}개
                    </p>
                    )}
        </div>
    )
}

export default Projects
