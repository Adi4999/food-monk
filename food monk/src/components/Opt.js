import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel  from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
export default function Opt(props) {
    let addonsREQ=[]
    let addonsOPT=[]
    const clickHandleRadio=(data,index)=>{
addonsREQ[index]=data
console.log(addonsREQ)

    }
    const clickHandleCheck=(e)=>{
        if(e.target.checked){
            addonsOPT.push(e.target.value)
        }
        else{
            addonsOPT.push(`-${e.target.value}`) 
        }
        console.log("ARR OPT ",addonsOPT)
    }

    const handleAdd=(data)=>{

var filtered = addonsREQ.filter(function (el) {
  return el != null;
});
console.log("FILTERRRRR",filtered)
if(data==0){
if(filtered.length<=0){
    alert("CHECK RADIO BUTTON(S)")
    return 0
}}

const newArr= [...filtered,...addonsOPT]
const sum = newArr.reduce((partialSum, a) => parseInt(partialSum) + parseInt(a), 0)
console.log("totasl",sum)
        props.addCart(((props.option.length>0)?sum:0))

    }
  return (
    <div style={{position:"relative"}}>
        
        {
         

         (props.option.length>=1)?   
           ( props.option.map((data,index)=>{
             return(
                <div>
                    <h2>{data.section_name}</h2>
                  {  (data.uitype=='RADIO')?
               (         <div>
                    
                        <RadioGroup>
               {         data.choices.map((opt=>{
                return(
                            <FormControlLabel name="radio" onChange={(e)=>clickHandleRadio(e.target.value,index)} value={opt.price.base_unit} control={<Radio />} label={`${opt.name} ${opt.price.base_unit} ${opt.price.iso_4217}`}/> 
                            )
                        }))}
                        </RadioGroup>
                    
                        </div>):(
                            <div>
                                  <FormGroup>
                                {
                                    data.choices.map((opt=>{
                                        return(
                                            <FormControlLabel value={opt.price.base_unit} onChange={(e)=>{ clickHandleCheck(e)}} control={<Checkbox  />} label={`${opt.name} ${opt.price.base_unit} ${opt.price.iso_4217}`} />
                                                    )
                                                }))  
                                    
                                }
                                            </FormGroup>
                            </div>
                        )
                    }
                </div>
             )
            })) 
                :("")


        }
        <div style={{position:"fixed",bottom:"0", right:"0"}}>
        <Button variant="contained" onClick={()=> handleAdd(props.option.length>0?0:1)}>+ Add to cart</Button>

</div>

    </div>
  )
}
