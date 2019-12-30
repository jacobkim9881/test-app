import React from 'react'
import { Main } from '../Css'
//import progress from './pathfinderProgress.json'

export default function Progress({progress}) {            
    return (        
        <Main>
            <h2>Progress</h2>
                {progress.map(progress => 
                <div>                    
                    File: Result{progress.file}<br/>
                    Total : {progress.total} Strings<br/>
                    Rest : {progress.subs} Strings<br/>
                    Progress: {Math.trunc(progress.subs*100/progress.total)} %<br/>                    
                    <progress value = {progress.subs} max = {progress.total}></progress>
                    <br/>
                    <br/>
                    <br/>
                </div>    
                    )}                
        </Main>
    )
}
