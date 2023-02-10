import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function MainCard(props) {
  const handleClick=()=>{
    props.getItem({"id":props.itemId,
    "name":props.name,
    "description":props.description,
    "basePrice":props.basePrice,
    "isoPrice":props.isoPrice,
    "expPrice":props.exponentPrice,
    "pic":props.picture,
    "fullTime":props. fulfillmentSeconds,
  })
    console.log(props.itemId)
  }
  
  return (
    <div  style={{margin:"20px"}}>



<Card sx={{ maxWidth: 350 }}  onClick={handleClick}>
 
      <CardMedia 
     
        component="img"
        height="200"
        image={props.picture}
        alt="food"
      />
      <CardContent style={{textAlign:"center"}}>
        <Typography gutterBottom variant="h4" component="div">
          {props.name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {props.basePrice}.<sup>{props.exponentPrice} </sup>{props.isoPrice}
        </Typography>
      </CardContent>

    </Card>

    </div>
  )
}
