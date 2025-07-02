import React, { useEffect, useState } from 'react';

const Useeffce = () => {
    const [count, setCount] = useState(0);
    const [message, updateMsg] = useState('message');

    useEffect(() =>{
       console.log(message);
       console.log(count);
    },[count,message]);
   
  return (
    <div className=''>

    
          <p>count value: {count} </p>
      <button onClick={()=>{setCount(count + 1)}} className='bg-blue-700 px-4 py-2 rounded-2xl cursor-pointer'>click</button>

        <button onClick={()=> {updateMsg("updated message")}}>updated count</button>
    </div>
  )
}
 
export default Useeffce
