import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
let arr=[]
localStorage.setItem('data',JSON.stringify(arr))
localStorage.setItem('cart',JSON.stringify(arr))

function App() {
  

  const [isCart,setIsCart]=useState(false)
const cartClick=(bool)=>{
setIsCart(bool)
console.log("cart decision",bool)
}
  return (
   <div  className='main-page'>

  <div className="left-page">
  <Header 
  cartClick={cartClick}
  isCart={isCart}
  />
  </div>
   <div className="right-page">
    <List
    isCart={isCart}
    />
   </div >
   </div>
   
  );
}

export default App;
