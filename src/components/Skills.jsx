import React from 'react';
import {Grid , Cell ,ProgressBar} from 'react-mdl';
function Skills(props){
    return(
        <Grid>
            <cell col={12}>
                <div style={{display:"flex"}}>
               <p > {props.skill} <ProgressBar progress={props.progress} /></p>
                </div>
            </cell>
        </Grid>
    )
}
export default Skills;