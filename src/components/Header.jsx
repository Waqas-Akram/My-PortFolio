import React from 'react';
import {Layout ,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './Main';
import PersonIcon from '@material-ui/icons/Person';
import {BrowserRouter ,Link} from 'react-router-dom';
function HeaderNav( props){
    return(
        <BrowserRouter>
        <div className="demo-big-content">
    <Layout fixedHeader>
        <Header className="header-class-color" title={<span><strong><PersonIcon style={{fontSize:"40px",marginTop:"-17px" }}/> My Portfolio</strong></span>}>
            
        </Header>
        <Drawer style={{background: "#F4CB55"}}>
            <Navigation>
            <Link style={{color:"white" ,fontWeight:"bold", fontSize:"20px"}} to="/">Home</Link>
                <Link style={{color:"white" ,fontWeight:"bold", fontSize:"20px"}} to="/resume">Resume</Link>
                <Link style={{color:"white" ,fontWeight:"bold", fontSize:"20px"}} to="/projects">Projects</Link>
                <Link style={{color:"white" ,fontWeight:"bold", fontSize:"20px"}} to="/contact">Contact</Link>
            </Navigation>
            </Drawer>
       
        <Content >
            <div className="page-content" >
            <Main />
            </div>

        </Content>
    
    </Layout>
</div>
</BrowserRouter>
    )
}
export default HeaderNav;