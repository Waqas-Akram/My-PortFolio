import React from 'react';
import {Layout ,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './Main';
import PersonIcon from '@material-ui/icons/Person';
import {BrowserRouter ,Link} from 'react-router-dom';
function HeaderNav(){
    return(
        <BrowserRouter>
        <div className="demo-big-content">
    <Layout fixedHeader>
        <Header className="header-class-color" title={<span><strong><PersonIcon style={{fontSize:"40px",marginTop:"-17px"}}/> My Portfolio</strong></span>}>
            <Navigation>
            <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
       
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