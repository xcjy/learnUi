import React from 'react';
import ReactDom from 'react-dom';
// import Button from './button';
import Icon from './icon';

const ClickHandler:React.MouseEventHandler=(e)=>{
    console.log(e.target)
}

ReactDom.render(<div>
    <Icon name="wechat" onClick={ClickHandler}/>

</div>, document.querySelector('#root'));