import React from 'react';
import {Grid, Cell, List,ListItem , ListItemContent} from 'react-mdl';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailIcon from '@material-ui/icons/Mail';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Contact(){
    return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}><h2>Waqas Akram</h2>
                <img className="avatar-image" style={{height:"250px ",width:"250px"}}
            //    src="https://avatars2.githubusercontent.com/u/52405087?s=460&u=bf26bed203472f385265b09c9c416b7e82acf209&v=4"/>
               src="https://scontent.flhe7-1.fna.fbcdn.net/v/t1.0-0/c0.0.206.206a/p206x206/119199289_2653771211619242_819998567179977743_o.jpg?_nc_cat=104&_nc_sid=da31f3&_nc_eui2=AeEpOm5TyGpJpSTXcLA761w6qoqP6YWxlYeqio_phbGVh40pOMsxZtspoiGQKMBTt8UFo172vvOC6MAAZtPmFdu0&_nc_ohc=V7PRkKncgtEAX_diOPZ&_nc_ht=scontent.flhe7-1.fna&_nc_tp=27&oh=fd5b8809c339dabda8769ad5fc4808f1&oe=5FABAE6B"/>
               <p style={{width:"75%",margin:"auto",paddingTop:"1em"}}>
                    Get in touch with me . Please use this contact information which i provided on this webpage right now
                </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
  <ListItem>
    <ListItemContent ><WhatsAppIcon style={{color:"#00E676",fontSize:"50px"}}/> <a href="https://wa.me/923044608401">+923044608401</a></ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent > <PhoneIcon style={{color:"#00E676",fontSize:'50px'}}/><a href="tel:03167062394">+923167062394</a></ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent ><MailIcon style={{color:"#006EC0" ,fontSize:'50px'}}/> <a href="mailto:waqasakram512@outlook.com"> Outlook</a></ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent ><MailOutlineIcon style={{color:"#C75047" ,fontSize:'50px'}}/> <a href="mailto:waqasassasin@gmail.com"> Gmail</a></ListItemContent>
  </ListItem>
  
  
</List>
</div>
                </Cell>
            </Grid>
            
        </div>
    )
}
export  default Contact;