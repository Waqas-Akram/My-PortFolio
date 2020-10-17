import React from 'react';
import {Grid , Cell ,Card , CardTitle,CardText,CardActions,Button} from 'react-mdl';
function ProjectCards(props){
    return(
        <Grid style={{float:"left",display:'block', marginLeft:"-10px",marginTop:"10px",justifyContent:"center"}}>
            <Cell col={3}>
        <div  style={{float:"left",display:'flex', marginLeft:"5px",marginTop:"10px"}}>
        <Card className="card-link" shadow={4} style={{width: '300px', height: '320px', margin: 'auto',justifyItems:"center"}}>
    <CardTitle expand style={{color: 'brown', background:`url(${props.imageUrl}) center / cover `}}>
        {props.projectName}</CardTitle>
    <CardText  style={{color:"grey"}}>
        {props.projectDiscription}
    </CardText>
    <CardActions border>
        <Button colored><a href={props.gitLink} style={{textDecoration:'none'}}>View on GitHUb</a></Button>
    </CardActions>
</Card>
</div>
</Cell>
</Grid>
    )
};
export default ProjectCards;