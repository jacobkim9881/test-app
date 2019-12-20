import React from 'react'
//import progress from './pathfinderProgress.json'

export default function Progress({progress}) {            
    const css = {
        display: "flex",
        flexWrap: "wrap",
        width: "750px",
        margin: "auto"
    }
    return (        
        <React.Fragment>
            <h2 style={css}>Progress</h2>
                {progress.map(progress => 
                <div style={css}>                    
                    File: Result{progress.file}<br/>
                    Total : {progress.total} Strings<br/>
                    Rest : {progress.subs} Strings<br/>
                    Progress: {Math.trunc(progress.subs*100/progress.total)} %<br/>
                    <br/>
                    <progress style={{}} value = {progress.subs} max = {progress.total}></progress>
                </div>    
                    )}                
        </React.Fragment>
    )
}
