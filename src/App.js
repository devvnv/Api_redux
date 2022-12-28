import React, { useEffect } from "react"; 
import { useDispatch, useSelector } from 'react-redux'
import { MyDisplayData } from '../src/action/action.idx'
import Display from "./display";

export default function App() {

 const dispatch = useDispatch()

  useEffect(()=>{
    fetch("https://reqres.in/api/usersx")
    .then(res=>res.json())
    .then(y=>{
      console.log(y);
      dispatch(MyDisplayData({
        type:'GetData',
        payload:y
      }))
    })
  },[])


  // const list = useSelector(y => console.log(y.product.item.payload.data,'aaaaaaaaaaaaaaaaaaaa'))
  // console.log(list,'list');

  return (
    <div>
      <Display/>
    </div>
  )
}
