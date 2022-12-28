import React from 'react'
import {useSelector} from 'react-redux'

const Display = () => {

  const list = useSelector((state) => state)
  console.log(list,'list');


  return ( 
    <div>
      {
        list?.product?.item?.payload?.data?.map((obj,i)=>(
          <div key={i} style={{backgroundColor:obj.color}}>
            {obj.name} 
          </div>
        ))
      }
    </div>
  )
}

export default Display