import React from 'react'
import {Main} from '../Css'
//import score from './pathfinderCalendar.json'

export default function Calendar({ score }) {
    const projects = {     
    }
    const dates = {
        width: "800px"        
    }

    const percent = {
        color: "red"
    }    
    return (
        <Main>
            <h2 style={projects}>Pathfinder : Kingmaker</h2>            
        <div style={projects}>                        
                    {score.map(x =>                    
                    <p style={dates}>
                    {x.month}월 {x.date}일
                    <br />번역됨: result{x.file} 파일의 문장 {x.total}개 중 
                    <br/>{x.subs}개(<a style={percent}>{Math.trunc(x.subs/x.total*100)}%</a>
                    ) 남음: {x.total-x.subs}개<br/>     
                    <img src={x.photo} alt=" "></img>
                    </p>                    
                    )}
        </div>
        </Main>
    )
}
