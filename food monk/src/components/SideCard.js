import * as React from 'react';
import {useState} from 'react'
import Opt from './Opt';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SideCard(props) {
    




const addCart=(data)=>{
    let isPush= true

    let food= JSON.parse(localStorage.getItem('data'))
    console.log("wonsder", food)
 food.filter((foodData)=>{
    if(foodData.name==props.obj.name){
    //  console.log(foodData.name,props.obj.name)
     isPush= false
   }
  })

 // console.log("RESPONSE", isPush)
  
if(isPush)
props.obj.basePrice+= data

  { food.push(props.obj) }
 localStorage.setItem('data',JSON.stringify(food))
 props.closeRight()  
}


const handleOpts=(data)=>{

}
let id = props.selectedId
let options= props.optionsName

  return (
    
    <div style={{padding:"20px",position:"relative"}}>
      <h2>Detail</h2>
<div style={{display:"flex", flexDirection:"row-reverse", cursor:"pointer"}}
onClick={()=>props.closeRight()}>X</div>



{console.log("option",id,  options[id], typeof options1)}





    <Card sx={{ display: 'flex', justifyContent:'space-around',paddingTop:"20px" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <div style={{display:"flex",width:"100%"}}>
        <Typography style={{width:"50%"}} component="h3" variant="h5">
         
         {props.obj.name}
       </Typography>
       <Typography style={{width:"50%"}}  variant="h6" color="blue" component="div">
        {props.obj.basePrice}.<sup>{props.obj.expPrice}</sup> {props.obj.isoPrice}     
       </Typography>
        </div>
          <Typography style={{paddingTop:"20px"}} variant="subtitle1" color="black" component="div">
           {props.obj.description}      
          </Typography>
        </CardContent>
     
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={props.obj.pic}
        alt="Food picture"
      />
    </Card>

    {console.log("option size",options[id].length)}
    {
        <Opt
        handleOpts={handleOpts}
        option={options[id]}
        addCart={addCart}
        />
    }


    
    </div>
  )
}
