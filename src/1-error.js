// import React from 'react';

// const ErrorExample = () => {
//     let title = 'random title'
//     const handleClick = () => {
//         title = 'hello people'
//     }
//   return (<React.Fragment>
//       <h2>{title}</h2>
//       <button type="button" className="btn" onClick={handleClick}>
//           change title
//       </button>
//   </React.Fragment>
//   );
// };

// export default ErrorExample;


import React, { useState } from 'react';
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello Lukasz');
    } else {
      setText('the World is fine');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;