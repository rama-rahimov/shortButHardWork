import axios from "axios";
import { useEffect, useState, useRef } from "react";
import './App.css';

const Vpereed = () => {
const [take, setTake] = useState("");
const ref = useRef();
const [arr, setArr] = useState([]);
const [arr2, setArr2] = useState("");
const [childrenArr, setChildrenArr] = useState([]);
const [dokontsa, setDokontsa] = useState([]);

const scrollToSection = (topId) => {
window.scrollTo({
top: topId ,
behavior: 'smooth'
})
}
    
const vperedFilter = (key) => {
if(dokontsa.length > 0 && dokontsa[0].key === key) {
setDokontsa([]);
return
}
const tadam = childrenArr.filter((el) => el.key === key);
setDokontsa(tadam);
}

setTimeout(() => {
setArr2("Hello")  
}, 100);

useEffect(() => {
const rabota = async () => {
await axios.get("http://localhost:3001/").then((ahaa) => {
setTake(ahaa.data[0].text);
});
}
const takee = ref.current.children[1].childNodes[0].children; 
if(!(arr.length > 0)){    
for (let iterator of takee) {    
if(iterator.id.includes("children")) {
let childrenKey = iterator.id.split("_")[1];
childrenArr.push({ value: iterator.innerText, offsetTop: iterator.offsetTop, key: childrenKey });
setChildrenArr(childrenArr);
} else if(iterator.id.includes("head")){ 
let headKey = iterator.id.split("_")[1];
arr.push({ value: iterator.innerText, offsetTop: iterator.offsetTop, key: headKey || 0});
setArr(arr);
}     
} 
} 
rabota();
},[take , arr2]);
return(
<div ref={ref} className='all'>
<div className='slider_header'> 
<div className='slider'>
<div className='scrollbox'>
<div className='scrollbox-inner'>
{
(arr || []).map((el, index) => {
return(
<div style={{paddingTop:"5px"}} key={index}>
<div className='head_and_0'>
<p onClick={() => scrollToSection(el.offsetTop)} className='firstPLeftSide'>
{el.value} 
</p>
{el.key > 0 ? <span onClick={() => vperedFilter(el.key)} className='span'>+</span> : null} 
</div>
{
dokontsa.length > 0 && dokontsa[0].key === el.key && dokontsa.map((el, index) => {
return (
<div key={index}>
<p className='secondPLeftSide' onClick={() => scrollToSection(el.offsetTop)}>{el.value}</p>
</div>
)
})
}
</div>
)
})
}
</div>
</div>
</div>
</div>
<div className='mineDiv'> 
<div dangerouslySetInnerHTML={{__html: take}}></div>
</div>
</div>
)
}

export default Vpereed ;