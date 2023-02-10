import React from 'react'
import { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Cart(props) {
    const [cartList,setCartList]= useState(JSON.parse(localStorage.getItem('data')))
console.log("FROM CART",cartList)


const arr=[]
let totalDis=0
const total=[]
const [arrQ,setArrQ]=useState(new Array(cartList.length).fill(1))

const inc=(index)=>{
   const arr = [...arrQ]
   arr[index]= arr[index] +1
    setArrQ(arr)
    console.log("array",arrQ)
}
const countPrice=() =>{
    cartList.map((data, index)=>{
       total.push(data.basePrice * arrQ[index])
    })

  totalDis = total.reduce((partialSum, a) => partialSum + a, 0);
}
const dec=(index)=>{
    const arr = [...arrQ]
    arr[index]= arr[index] -1
   
if(arr[index]==0){
    const arr2= [...cartList]
    arr2.splice(index,1)
    setCartList(arr2)
    arr.splice(index,1)
    console.log("ARRYAS",arr2,arr)
    setArrQ(arr)
    
    localStorage.setItem('data',JSON.stringify(arr2))

}

setArrQ(arr)
     console.log("array",arrQ)
 }
 countPrice()
useEffect(()=>{
    countPrice()
},[cartList,arrQ])

    return (
    <div style={{marginTop:"20px",position:"relative", height:"99vh"}}>
       <h1 style={{marginBottom:"20px"}}>cart</h1> 


{(cartList.length==0)?<div style={{color:"grey"}}>YOUR CART IS EMPTY</div>:('')}
{


cartList.map((data,index)=>{

    return(

        <Card sx={{ display: 'flex', justifyContent:'space-between',marginBottom:"50px" }}>
              <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={data.pic}
          alt="Food picture"
        />
        <Box sx={{ display: 'flex',justifyContent:'space-around', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
          <div style={{display:"flex",width:"100%" ,display:"flex",justifyContent:"space-around"}}>
          <Typography component="h3" variant="h5">
           
           {data.name}
         </Typography>
         <Typography   variant="h6" color="blue" component="div">
          {data.basePrice}.<sup>{data.expPrice}</sup> {data.isoPrice}     
         </Typography>

         <div style={{display:"flex", alignItems:"center"}}>
            
            <Button onClick={()=>inc(index)} variant="outlined" sx={ {  borderRadius: 100} }>+</Button>
            {arrQ[index]}
            <Button onClick={()=>dec(index)} variant="outlined" sx={ {  borderRadius: 100} }>-</Button>
         </div>
          </div>
            <Typography style={{paddingTop:"20px"}} variant="subtitle1" color="black" component="div">
             {data.description}      
            </Typography>
          </CardContent>
       
        </Box>
  
      </Card>

    )
}) 
}

<div style={{width:"100%",position:"fixed",
 backgroundColor:"lightgreen", bottom:0,fontSize:"1.5em"}}>
<div >YOU HAVE TO PAY {totalDis} USD</div>
</div>

    </div>
  )
}
