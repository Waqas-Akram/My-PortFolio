import React from 'react';
import {Grid ,Cell} from  'react-mdl';
function Education(props){
    return (
        <div>
            <Grid>
                <Cell col={4}>
                {props.startYear} -- {props.endYear}
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:"8px"}}> {props.schoolName}</h4>
                        <p>{props.schoolDiscription}</p>
                </Cell>
            </Grid>
        </div>
    )
}
export default Education;