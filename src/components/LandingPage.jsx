import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Grid, Cell} from 'react-mdl';
function Landing(){
    return(
        <div style={{width:"100%",margin:"auto" , background: "#544a7d",  /* fallback for old browsers */
            }} >
            <Grid>
            <div className="landing-grid " >
            <img src="https://scontent.flhe3-1.fna.fbcdn.net/v/t1.0-9/p720x720/65386737_2268208966842137_2281283458502230016_o.jpg?_nc_cat=101&_nc_sid=174925&_nc_eui2=AeFg2TcdqF6vChfNs22l2JBjQyBhBWBfh8NDIGEFYF-Hw3tlJ_M7LgerIzpp-jMWC58L-qOeHwdxbidC5mmcR_FV&_nc_ohc=bhA2zXFo2fIAX8GGyWe&_nc_ht=scontent.flhe3-1.fna&tp=6&oh=98c6dc20c00cae3ded1c5a16534a42f7&oe=5FA92743"
                    className = "avatar-image" alt ="image not found"/>
                <Cell col={12}>
                    
                    <div className="banner-text " >
                        <h1>Waqas Akram   </h1>
                        <h3>MERN Stack Web Developer</h3>
                        <hr/>
                        <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJs | Express | MongoDB</p>
                            <div className="social-links">
                               <a href="https://github.com/Waqas-Akram" target="_blank"><GitHubIcon style={{fontSize:"0.5em",color:"#592B4C"}} title="Go to GitHub Account"/></a> 
                               <a href="https://twitter.com/Waqas__Akram" target="_blank"><TwitterIcon  style={{fontSize:"0.5em", color:"#1DA1F2"}}/></a>
                               <a href="https://www.facebook.com/waqasassasin/" target="_blank"><FacebookIcon style={{fontSize:"0.5em",color:"#0D88F0"}} /></a>
                               <a href="https://www.linkedin.com/in/waqas-akram-2b5449154/" target="_blank"><LinkedInIcon style={{fontSize:"0.5em",color:"#0077B5"}}/></a>
                            </div>
                    </div>
                    
                </Cell>
            </div>
            </Grid>
            
        </div>

    )
}
export  default Landing;