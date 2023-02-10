import React from 'react'
import MainCard from './MainCard'
import SideCard from './SideCard'
import Cart from './Cart'
import { useState,useEffect } from 'react'

import products from '../dataCenter/products.json'
import options from '../dataCenter/options.json'

import Grid from '@mui/material/Grid';



export default function List(props) {
  const [windowLeft,setWindowLeft]= useState("100%")
  const [windowRigth,setWindowRigth]= useState("0")
  const [cardSize,setCardSize]= useState("33.333333%")
  const [id,setId]= useState()
  const [isSecond,setIsSecond]=useState(false)
  const [isThird,setIsThird]= useState(false)
  const [selectedId,setSelectedId]=useState('')
 // console.log("helloooo",options)

console.log("CartDecision",props.isCart)
  const getItem=(data)=>{
    //console.log(itemId)
    setId(data)
    setWindowLeft("50%")
    setCardSize("50%")
    setIsSecond(true)
    setSelectedId(data.id)

 //   console.log("state",data.id)

 return data
    

  }
  const closeSidePAge=()=>{
   
    setWindowLeft("100%")
    setCardSize("33.333333%")
    setIsSecond(false)

  }
  const closeSideCart=()=>{
    setIsSecond(false)
    if(isThird){
      setWindowLeft("100%")
    }
    else{
      setWindowLeft("50%")
    }
  }


  return (
    <div style={{display:"flex"}}>
    <div className="upList" style={{width:`${props.isCart?'50%':windowLeft}`}}>

<ul className="SubList">
{ 
  products.map((data,index)=>{
//console.log("BEART",index)
    return(
          <li className='child' style={{flex: `0 0 ${props.isCart?'50%':cardSize}`}}>
      <MainCard
    itemId={data.item_id}
      name= {data.name}
      description= {data.description}
      basePrice ={data.price.base_unit} 
      isoPrice= {data.price.iso_4217}
      exponentPrice= {data.price.exponent}
      picture= {data.picture_url}
      fulfillmentSeconds= {data.fulfillment_seconds}

      getItem = {getItem}
      
      />  
      </li>
    )  
  })
    
}
</ul>

</div>

{(isSecond && !props.isCart)?(<div style={{width:"50%"}}>

{console.log("FIFIF",selectedId)}
<SideCard 

obj={id}
closeRight={closeSidePAge}
selectedId={selectedId}
optionsName={options}
/>
</div>):('')}
      
{props.isCart?(
    <div style={{width:"50%"}}>

<Cart
 
/>
</div> ):('')

}

       
</div>
    
  )
}
