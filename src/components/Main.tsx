import React from 'react';

const Main:React.FC = ()=>{
    return(
      <div>
        안녕하세요
        {' '}
        {localStorage.getItem('id')}
        님
      </div>
    )
}

export default Main;
