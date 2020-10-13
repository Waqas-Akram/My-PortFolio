import React from 'react';
import {Grid, Cell} from 'react-mdl';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import SchoolArray from './SchoolArray';
import Experience from './Experience';
import Skills from './Skills';
import SkillArray from './SkillArray';
function Resume(){
    return(
        <div >
          <Grid>
            <Cell col={4}>
                <PersonalInfo/>
              </Cell>
            <Cell className="resume-right-col" col={8}>
              <h2>Education</h2>
              {SchoolArray.map(item =>{
                return <Education startYear={item.startYear}
                endYear={item.endYear}
                schoolName = {item.schoolName}
                schoolDiscription={item.schoolDiscription}
                />
              })
              }
              <hr style={{borderTop:"5px solid grey"}}/>
                <h2>Experience</h2>
                <Experience/>
                <hr style={{borderTop:"5px solid grey"}}/>
                <h2>Skills</h2>
               { SkillArray.map(skillItem=>{
                 return<Skills skill={skillItem.skill}
               progress={skillItem.progress}
               />
               }) 
               }
              </Cell>
          </Grid>

        </div>
    )
}
export  default Resume;