import React from'react';
import ReactDom from'react-dom';

let date=new Date().toLocaleDateString();//by using this object you can add time or date
const time=new Date().toLocaleTimeString();

ReactDom.render(
<>
<h1>Time House</h1>
<p>Your Current Date Is{date}</p>
<p>Your Current Time Is{time}</p>
</>,

  document.getElementById('root')
);