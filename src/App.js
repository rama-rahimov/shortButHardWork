import { useEffect, useState } from 'react';
import './App.css';
function App() {
const [teqText , setTeqText] = useState([]);
const [arrTeq] = useState(`<h1>ljnlknk</h1>   <p>hjjhvvjk</p>

<h1>kjv kjfdnd</h1>    <p>kjbdjnlksv</p>


<h1>kjfdns ldndfs</h1>    <p>jkjdvf</p>`);
useEffect(() => {
const takeOnlyH1 = (arrTeg) => {
console.log(arrTeg);
if(arrTeg.includes("<h1>")){
let firstH1 = arrTeg.indexOf("<h1>");
// firstH1 =+ 4 ;
console.log(firstH1);
const secondH1 = arrTeg.indexOf("</h1>");
console.log(secondH1);
const arrHtml = arrTeg.slice(firstH1 + 4, secondH1);
console.log(arrHtml);
console.log(arrTeg.slice(secondH1 + 5));
setTeqText(teqText.push(arrHtml));
const takeExcept = arrTeg.slice(secondH1 + 5);
console.log(takeExcept);
takeOnlyH1(arrTeg.slice(secondH1 + 5));
} else {
console.log(teqText);
return teqText ;
}
}
takeOnlyH1(arrTeq);
}, []);
return (
<div> 
jnsdsdsdjnlfk 
</div>
);
}

export default App;
