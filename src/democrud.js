import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>


    <div className='tatal'>
<democrud/>
<button className='btn'>Shufle</button>
<button className='btn'>-</button>
<input type='text' name='text' placeholder='enter the number'/>


    </div></>

  );
}

export default Counter;
