import { useEffect, useRef, useState } from 'react';
import './App.css';
function Training() {
const ref = useRef();
const [arr, setArr] = useState([]);
const [arr2, setArr2] = useState("");
const [childrenArr, setChildrenArr] = useState([]);
const [dokontsa, setDokontsa] = useState([]);

const scrollToSection = (elementRef) => {
window.scrollTo({
top: elementRef ,
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

useEffect(() => {
const takee = ref.current.children[1].childNodes;      
if(!arr[0]){
for (let iterator of takee) {  
if(iterator.id.includes("children")) {
let childrenKey = iterator.id.split("_")[1];
childrenArr.push({ value: iterator.innerText, offsetTop: iterator.offsetTop, key: childrenKey });
setChildrenArr(childrenArr);
} else if(iterator.id.includes("head_0")){ 
let headKey = iterator.id.split("_")[2];
arr.push({ value: iterator.innerText, offsetTop: iterator.offsetTop, key: headKey || 0});
setArr(arr);
}
} 
}  
setArr2("Hello");                           
}, [arr2]);
return (
<div ref={ref} id='hmmm' className='leftSideSimple'>
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
<h2 defaultValue="What types of Phone repair are offered?"  id='head_0_1'>What types of Phone repair are offered?</h2>
<p>The partner repair stores of Simply Fixable offer the following repair services: cracked phone screen repair, phone battery replacement, charging port, front and back camera, headphone jack, loudspeaker, home/power button, back glass, and water damage repair.</p>

<h3 id='children_1'>Phone screen replacement</h3>
<p>Dropping your phone on a hard surface, or putting pressure on the screen can damage it. To avoid further damage, you should get a phone screen replacement from a repair store in your area.</p>

<h4>How much does it cost to replace a Phone screen?</h4>
<p>On average, it costs $199 for iPhone screen repair and $89 for Samsung screen replacement.</p>

<h4>How long does it take for phone screen replacement?</h4>
<p>The time it takes to repair a phone screen depends on the seriousness of the damage and also the availability of parts. On average, it takes anywhere from one to two hours for screen replacement.</p> 

<h4>How to prevent phone screen from breaking?</h4>
<p>Use a bumper case or tempered glass screen protector to prevent the phone screen from breaking.</p>

<h3 id='children_1'>Phone battery replacement</h3>
<p>If you have been using your phone for years, the battery health can be affected and start causing issues such as not charging, heating up of the device, and not holding a charge. It is ideal to get your phone battery replaced to get it running smoothly.</p>

<h4>How much does it cost to replace a Phone battery?</h4>
<p>On average, it costs $72 to replace the battery of an iPhone and $70 for Samsung.</p>

<h4>How long does it take to replace a Phone battery?</h4>
<p>It takes at least 30 minutes to 2 hours to replace a phone battery. Time can increase depending on the availability of battery for your phone model.</p>

<h4>How to prevent phone battery damage?</h4>
<p>Avoid overcharging your phone and also close the apps that you are not using. Also, you should always use an official charger to charge your phone. This way, you can increase the life of your battery and prevent any potential damage.</p>

<h3 id='children_1'>Phone charging port repair</h3>
<p>Inserting a charger into the charging port with force can damage it, preventing it from charging. Cleaning the charging port sometimes fixes this issue, but if not, charging port repair or replacement is required.</p>

<h4>How much does it cost to repair a Phone charging port?</h4>
<p>On average, it costs $78 to repair the charging port of iPhone and $68 for Samsung.</p> 

<h4>How long does it take to repair a Phone charging port?</h4>
<p>Most phone charging port repair takes about 60 minutes.</p> 

<h4>How to prevent phone charging port damage?</h4>
<p>Regular maintenance, like cleaning the charging port from dirt or debris and avoiding putting the phone in hot temperatures, can save it from any potential damage.</p> 

<h2 id='head_0_2'>Common Phone Problems That Could Be Fixed With Us </h2>
<p>Here are some of the common phone problems that users face:</p>

<h3 id='children_2'>Broken Phone screen</h3>
<p>An accidental drop can break a phone screen and may impact its functionality. It’s recommended to get your mobile phone repaired if the screen is broken.</p>

<h4>How to stop phone screen from breaking?</h4>
<p>Using a high-quality screen protector can stop your phone screen from breaking.</p> 

<h3 id='children_2'>Phone won’t turn on</h3>
<p>A drained battery, hardware, or software issues can stop the phone from turning on. If none of the solutions work, take your phone to a mobile phone repair shop associated with Simply Fixable to avoid further damage.</p>

<h4>How to prevent phone from not turning on?</h4>
<p>Take care of your battery; don’t overcharge and always use an official charger. Also, keep your phone updated as it can solve many bugs that is causing this issue.</p> 

<h3 id='children_2'>Phone won’t charge</h3>
<p>Your phone can stop charging due to a damaged charger, a fault in the charging port, or a faulty or drained battery. Try using a different charger, and if the issue persists, get help from a phone repair shop.</p> 

<h4>Phone Won't Charge: How to Troubleshoot and Fix?</h4>
<p>Restart your phone and change the charger to see if this is causing an issue. If this doesn’t work, consider battery replacement, especially if it’s old.</p> 

<h3 id='children_2'>Broken Phone charging port</h3>
<p>Physical damage, such as inserting the charging cable into the port forcefully, can cause it to stop working. This issue can affect the usability of your phone and needs immediate attention. You can visit either the Apple phone repair store or the Samsung repair store in your area.</p> 

<h4>How to stop phone charging port from breaking?</h4>
<p>Regularly clean any dirt or debris that may stuck in the charging port to avoid any damage.</p>

<h3 id='children_2'>Phone overheating</h3>
<p>A faulty battery, using power-intensive apps, or placing the phone in high temperatures can cause your phone to overheat. To fix the issue, you should close the unwanted apps and allow the phone to cool down a bit by putting it at normal temperature.</p> 

<h4>How to prevent phone from overheating?</h4>
<p>Don’t use power-intensive apps for longer periods and also, avoid placing your phone in hot temperatures.</p>

<h3 id='children_2'>Phone black screen</h3>
<p>Software glitches or hardware failure can result in a black screen on your phone. Try performing a hard reset, and if the issue still persists, get help from the phone repair service.</p>

<h4>How to prevent phone black screen?</h4>
<p>Check for any available updates as they can improve the phone's performance and resolve any issues. Try hard reset and if it doesn’t work, take your phone to a professional repair service.</p> 

<h3 id='children_2'>Phone won’t turn off</h3>
<p>A faulty power button or issue with software can stop the phone from turning off. Try to force restart, and if the issue doesn’t resolve, seek professional assistance from a repair store in your area.</p>

<h4>Phone won’t turn off: How to fix this issue?</h4>
<p>Try to force restart as it may solve many potential issues.</p>

<h3 id='children_2'>Phone battery draining fast</h3>
<p>The use of heavy apps, apps running in the background, or old batteries can cause the phone battery to drain faster than normal. Get your battery replaced by a professional repair store to keep the phone up and running.</p> 

<h4>How to prevent phone battery from draining fast?</h4>
<p>Use battery saving mode especially if you are using power-intensive apps, don’t overcharge your phone, and always close the unused apps running in the background.</p> 

<h3 id='children_2'>Phone water damage</h3>
<p>Water can damage your phone even if it’s waterproof. If you suspect such damage, immediately let your phone dry at normal temperature before using it.</p> 

<h4>How to prevent phone from water damage?</h4>
<p>Don’t use your phone near water bodies to avoid any water damage even if your phone is waterproof.</p> 

<h3 id='children_2'>Frozen Phone</h3>
<p>Software bugs can often cause the phone to freeze. To resolve this issue, try a hard reset, and if it still stays the same, consult a professional technician.</p> 

<h4>How to prevent phone from freezing?</h4>
<p>A hard reset should resolve the frozen phone screen issue.</p>

<h2 id='head_0'>Who is Simply Fixable?</h2>
<p>Simply Fixable is a platform that connects customers with local repair shops that have been vetted and approved by Simply Fixable. Our mission is to make it easy and affordable for people to get their mobile devices repaired. Our selection ensures  everyone has access to high-quality and affordable device repair services across the USA.</p>

<h4 id='head_0'>How much does it cost to repair a Phone?</h4>
<p>The cell phone repair cost depends on factors such as brand, model, and the type of damage. Below is a breakdown of the average phone screen repair cost, battery replacement cost, and charging port repair cost of the iPhone. We’ll also discuss the same for Samsung phone repair.</p>
<table>
    <colgroup>
    <col width={200} />
    <col width={194} />
    <col width={196} />
    </colgroup>
    <tbody>
    <tr>
    <td><p><b>Repair Types</b></p></td>
    <td><p><b>iPhone</b></p></td>
    <td><p><b>Samsung</b></p></td>
    </tr>
    <tr>
    <td><p><b>Screen Repair</b></p></td>
    <td><p><b>$199</b></p></td>
    <td><p><b>$89</b></p></td>
    </tr>
    <tr>
    <td><p><b>Batter replacement</b></p></td>
    <td><p><b>$72</b></p></td>
    <td><p><b>$70</b></p></td>
    </tr>
    <tr>
    <td><p><b>Charging port repair</b></p></td>
    <td><p><b>$78</b></p></td>
    <td><p><b>$68</b></p></td>
    </tr>
    </tbody>
</table>

<p><strong>Table 1. iPhone and Samsung repair costs</strong></p>

<h2 id='head_0'>How long does it take to repair a Phone?</h2>
<p>The time duration of mobile phone repair largely depends on the nature of the damage and the availability of tools and parts. Physical damage, such as screen replacement, takes 45 minutes, battery replacement takes about 60 minutes or less, and charging port repair takes 1 hour and 45 minutes.</p> 

<p>Damages that are not clearly visible, such as water damage or software issues, can take anywhere from a few hours to several days.</p>

<p>On average, at Simply Fixable’s partner stores, repairs take about 45 minutes or less.</p> 

<h2 id='head_0'>Is it worth repairing a Phone?</h2>
<p>Repairing a phone is cheaper than buying a new one, especially if the damage is minor. However, it’s worth spending on a new phone in case of severe damage. The decision to repair the device also depends on factors like the phone’s age and repair costs, especially in your area. Here, we’ll break down the pros and cons of repairing a phone vs. getting a new phone to give you a better idea about both scenarios:</p>

<ul>
<li>Repairing your phone is less costly, but make sure to choose the right repair store based on factors such as customer reviews, their ability to handle devices, and whether they offer a repair warranty.</li>
<li>Buying a new phone is recommended in case of severe damage to the device, such as hardware issues. The new phone comes with the latest features and updates to fix any software issue you previously faced.</li>
</ul> 

<h2 id='head_0'>How do you know if your Phone is damaged?</h2>
<p>It’s not difficult to identify that your phone is damaged as it's based on physical and non-physical signs. Below are some of the aspects that show your phone may be damaged and needs immediate attention:</p>

<ul>
<li>The first and most common issue is a cracked screen. If your phone’s screen is broken, it must be addressed immediately before it leads to bigger issues.</li>
<li>If your phone’s display changes color or the screen is unresponsive, your phone has been damaged through water, or there might be any functional issue. Either way, it needs a thorough analysis.</li>
<li>If your phone’s battery is draining faster than usual or not charging at all, there is damage to the battery.</li>
<li>While overheating of the phone is normal, excessive overheating indicates that there is something wrong with your phone.</li>
<li>Any other issue that is not normal may indicate that your device has been damaged, and you must take it to a repair shop in your area.</li>
</ul>
<h2 id='head_0_3'>Can you fix a Phone by yourself?</h2>
<p>Repairing a phone yourself is not difficult, especially when many DIY phone repair guides and tools are available online. However, one must have professional knowledge before performing DIY home repairs. Otherwise, it is recommended to take your device to a professional repair store in your area.</p>
<p>Before deciding whether to repair your phone yourself or take it to a professional, it’s important to weigh the pros and cons of both:</p>

<h3 id='children_3'>DIY Phone Repair</h3>

<table>
<tbody>
<tr>
<td><p><b>Pros</b></p></td>
<td><p><b>Cons</b></p></td>
</tr>
<tr>
<td><p><b>You can save labor costs if you repair your phone at home.</b></p></td>
<td><p><b>Without proper knowledge, any wrong step can further damage your phone.</b></p></td>
</tr>
<tr>
<td><p><b>DIY phone repair will not leave you with the fear you get when you leave your device with someone else.</b></p></td>
<td><p><b>Some repairs need professional tools, which might not be available or come with higher costs.</b></p></td>
</tr>
</tbody>
</table>

<h3 id='children_3'>Professional Phone Repair</h3>

<table>
<tbody>
<tr>
<td><p><b>Pros</b></p></td>
<td><p><b>Cons</b></p></td>
</tr>
<tr>
<td><p><b>There is a satisfaction that your phone is with professionals with technical knowledge.</b></p></td>
<td><p><b>Getting your phone repaired by professionals comes with higher costs as you’re paying for both parts as well as labor.</b></p></td>
</tr>
<tr>
<td><p><b>Many repair stores, especially those associated with Simply Fixable, offer a 90-day warranty, ensuring that you can get it repaired again free of charge if something goes wrong.</b></p></td>
<td><p><b>Not every repair store is trustworthy, and if you get your phone repaired from any unreliable store, it can cause further damage to your device and increase the repair costs.</b></p></td>
</tr>
</tbody>
</table>

<h2 id='head_0_4'>Should you buy a new Phone or get it repaired?</h2>
<p>The decision whether to buy a new phone or get the old one repaired depends on many factors, such as your budget, the nature of the damage (how serious it is), and your usage. Here are the pros and cons of both options to help you make the right decision:</p>

<h3 id='children_4'>Getting your phone repaired</h3>

<table>
<tbody>
<tr>
<td><p><b>Pros</b></p></td>
<td><p><b>Cons</b></p></td>
</tr>
<tr>
<td><p><b>Repairing your phone is cost-effective if it’s only a minor damage like a broken screen.</b></p></td>
<td><p><b>If you get your phone repaired from an unreliable store, it can cause further harm.</b></p></td>
</tr>
<tr>
<td><p><b>Repairing your phone means you don’t lose any data or log-ins. You just need to take a backup of your data before sending it for repair and retrieve it later.</b></p></td>
<td><p><b>Sometimes, stores are busy serving other customers’ repairs resulting in delayed service. It means you might have to spend few hours or sometimes a day or two without your phone.</b></p></td>
</tr>
</tbody>
</table>   
<p>Finding a trustworthy repair store to fix your phone can be challenging especially if you don’t know anyone in your area. To cater to this issue, Simply Fixable partners with those stores that they have vetted based on certain criteria to provide the best repair services to the customers. You can visit the website and find a repair store in your area while ensuring, your device will be in safe hands.</p>

<h3 id='children_4'>Buying a new phone</h3>

<table>
<tbody>
<tr>
<td><p><b>Pros</b></p></td>
<td><p><b>Cons</b></p></td>
</tr>
<tr>
<td><p><b>New models come with updated features, improving overall user experience. </b></p></td>
<td><p><b>Moving all your data from an old phone to a new one can be a hassle. </b></p></td>
</tr>
<tr>
<td></td>
<td><p><b>It may take some time to get used to your new phone, or maybe you don’t get used to it at all. </b></p></td>
</tr>
</tbody>
</table> 

<h2 id='head_0'>How to prepare your phone for repair?</h2>
<p>To prepare your phone for any kind of repair, make sure to back up all your data to cloud storage or any external device. Then, turn off the tracking services like “Find my iPhone”. You should also log out from all the accounts, especially Google and iCloud.
<br />
If possible, after backing up the data and other necessary information, reset your phone to factory settings to ensure every personal detail is cleared. Now, you can finally give your phone to a repair store in your area without any fear of privacy or security.</p>

<h2 id='head_0_5'>What types of Phone repair services exist?</h2>
<p>Three types of repair services are offered: ‘mail-in service’, ‘local repair service’, and ‘come to you service’.</p> 

<h3 id='children_5'>Mail-in service</h3>
<p>Advantages</p>

<ul>
<li>You can send your phone to repair in the mail anytime you like without leaving your home. </li>
<li>You don’t have to restrict to a particular area or store. You can mail it anywhere you like. </li>
</ul>

<p>Disadvantages</p>

<ul>
<li>You are unable to communicate face to face, which can be challenging as some damages require detailed discussion. </li>
<li>Shipping will cost you money and a long waiting time.</li>
</ul> 
<h3 id='children_5'>Local repair service</h3>
<p>Advantages</p>

<ul>
<li>You can walk into any repair store in your area and get your phone repaired. </li>
<li>You have a chance to interact with your technician and explain the issues in detail. </li>
</ul>
 
<p>Disadvantages</p>

<ul>
    <li>Sometimes, the parts are unavailable, so you have to leave your phone with them. </li>
    <li>There is always a data privacy risk involved.</li>
</ul> 
<h3 id='children_5'>Come to you repair service</h3>
<p>Advantages</p>

<ul>
<li>The technicians will come to your decided place, whether it’s your home, office, or somewhere else. </li>
<li>You can get your phone repaired immediately right in front of you. </li>
</ul>
 

<p>Disadvantages</p>
<ul>
<li>‘Come to you’ repair service costs more than the ‘mail in service’ and ‘local repair service’.</li>
<li>This type of service may not cover all the repairs. For severe phone damage, you may still have to visit a repair store.</li>
</ul>
<h2 id='head_0'>How to choose the right repair store for your Phone repair?</h2>
<p>Choosing the right repair store for your phone can be challenging. Below are some of the factors that you can consider when choosing a repair store:</p>
<ul>
<li>Look for repair stores that have good customer standing. You can check this through their Google reviews.</li>
<li>Inquire about the quality of the parts that they use. A reliable store always uses high-quality parts that meet industry standards.</li>
<li>Compare prices of different repair stores and also check what each store is offering at that price.</li>
<li>Ask about their repair warranty. A good repair store always offers its customers at least 90 days of minimum warranty after repair.</li>
</ul> 
<h2 id='head_0'>Who will be fixing your Phone?</h2>
<p>Simply Fixable is a reliable platform that works as a bridge linking customers to high-quality local repair shops that they have approved. They aim to make repair services affordable and easily available to everyone. Over the past ten years, more than 40,000 phones, tablets, computers, and game consoles have been repaired through their platform.</p>

<h2 id='head_0'>Where else can you get your Phone fixed?</h2>
<p>When looking for repair options to fix your phone, especially your iPhone, you’ve two excellent choices: Apple and Simply Fixable. Apple's repair service ensures your phone is in the right hands. On the other hand, Simply Fixable is a trustworthy repair service provider. Their hundreds of partner repair stores across the United States are personally vetted by them.</p> 

<p>Here are the average iPhone repair costs by<a>Apple</a>  and   <a>Simply Fixable</a> .</p>
 
<table>
    <colgroup>
    <col width={208} />
    <col width={209} />
    <col width={208} />
    </colgroup>
    <tbody>
    <tr>
    <td><p><b></b></p></td>
    <td><p><b>Simply Fixable</b></p></td>
    <td><p><b>Apple</b></p></td>
    </tr>
    <tr>
    <td><p><b>Repair warranty</b></p></td>
    <td><p><b>90 days minimum</b></p></td>
    <td><p><b>90 dates from the date of service</b></p></td>
    </tr>
    <tr>
    <td><p><b>Avg iPhone repair cost</b></p></td>
    <td><p><b>$110.88</b></p></td>
    <td><p><b>$261.85</b></p></td>
    </tr>
    <tr>
    <td><p><b>Charging port repair</b></p></td>
    <td><p><b>$78</b></p></td>
    <td><p><b>$68</b></p></td>
    </tr>
    </tbody>
</table>

<p><strong>Table 2. iPhone repair providers</strong></p>
<p><em>*Data in the given table is based on Simply Fixable's market research and the official Apple website</em></p>

<h2>*Data in the given table is based on Simply Fixable's market research and the official Apple website</h2>

<h2 id='head_0'>How are partner stores selected at Simply Fixable?</h2>
<p>The partner stores are carefully selected based on some factors to ensure optimal customer satisfaction. Key considerations include the quality of the service provided, the time duration of repair service, the proficiency and training of their staff, and their aptitude for rapidly diagnosing device issues. Simply Fixable only partners with stores with years of industrial experience and must offer a minimum 90-day warranty.</p>

<p>Additionally, they prioritize shops that demonstrate outstanding customer service with 90% minimum positive reviews from customers. The ease with which repair appointments can be scheduled, competitive pricing, and the ready availability of essential parts and tools for repairs further influence the selection process of Simply Fixable.</p>

<p>There is also a guideline developed by Simply Fixable, which each store’s technicians must adhere to. The guideline includes the process of performing repairs professionally with the right tools. Every partnered store is required to have enough technical resources to meet demand and should only use advanced tools for any kind of repair to ensure the safety and durability of devices.</p> 

<h2 id='head_0'>How are parts that are used during your repair sourced?</h2>
<p>Simply Fixable only partners with stores that pass the quality control check. All the partner repair stores must provide parts that meet industry standards for each device they repair.</p>

<h2 id='head_0'>Tips to keep your Phone running smoothly and avoid problems</h2>
<p>Below are some of the tips you can follow to make your phone run smoothly without any issues:</p>

<ul>
<li>Always update your phone’s apps and software to the latest versions, as these updates can often fix bugs.</li>
<li>Use the power-saving mode when using heavy applications such as video streaming and games. This will help optimize your battery health.</li>
<li>Restart your phone every now and then to improve its performance, especially if you notice any issues.</li>
<li>Even if your device is waterproof, you should avoid exposure to water or using your phone in high temperatures.</li>
<li>Clean your phone’s charging ports with a soft cloth to avoid dirt and debris.</li>
<li>Always use official chargers and avoid charging your phone overnight.</li> 
</ul>
<h2 id='head_0'>Phone Troubleshooting Articles</h2>
<p>iPhone Won't Turn On</p>

<p>iPhone Won’t Charge</p>

<p>Phone Won't Charge. What are the Reasons and Solutions?</p>

<p>Why is My Phone so Slow? Reasons and Solutions</p>

<p>iPhone Charger Not Working</p>

<p>Why is my iPhone Overheating?</p>

<p>Why is my iPhone camera not working?</p>

<p>Why is my iPhone glitching?</p>

<p>iPhone Black Screen of Death: Why It Happens and How to Fix</p>

<p>Why My iPhone 12 Won't Turn On</p>

<p>iPhone 13 won’t turn on</p>

<p>iPhone 14 Won't Turn On </p>

<p>Why Your iPhone 14 Pro Max Is Frozen and Won’t Turn Off</p>

<p>iPhone 12 Black Screen</p>

<p>iPhone 11 Black Screen</p>

<p>iPhone 14 Black Screen</p>

<p>iPhone 14 Pro Max Camera Issues</p>

<p>iPhone 11 Won’t Charge</p>

<p>iPhone 13 Won’t Charge</p>

<p>iPhone 12 Won't Charge</p>

<p>iPhone Turns Itself Off</p>

<p>iPhone 13 Overheating</p>

<p>iPhone 12 Overheating</p>

<p>iPhone 11 Overheating</p>

<p>iPhone 13 Black Screen</p>

<p>iPhone 11 Battery Draining Fast</p>

<p>How to Hard Reset iPhone 11</p>

<p>How to Hard Reset iPhone 12</p>

<p>iPhone X won't Turn On</p>

<p>iPhone 11 Stuck on Apple Logo</p>

<p>iPhone 14 Won't Charge</p>

<p>How to clear cache on iPhone</p>

<p>New iPhone 15 but Old Issues: A Troubleshooting Guide</p>

<p>Common Issues Users Face with the iPhone 14</p>

<p>A Comprehensive Guide to Troubleshooting Common iPhone 13 Issues</p>

 

<h2 id='head_0'>Phone Repair Cost Guide</h2>
<p>Phone Screen Repair Cost</p>

<p>iPhone Repair Cost in US</p>

<p>iPhone Screen Repair Cost in US</p>

<p>iPhone Battery Replacement Cost in US</p>

<p>iPhone Charging Port Repair Cost in US</p>

<p>iPhone 14 Repair Cost in US</p>

<p>iPhone 13 Repair Cost in US</p>

<p>iPhone 12 Repair Cost in US</p>

<p>iPhone 11 Repair Cost in US</p>

 

 

<h2 id='head_0'>Phone Repair Guide</h2>
<p>How to Repair Phone Screen by Yourself?</p>

<p>How to Replace iPhone Screen by Yourself?</p>

<p>How to Replace iPhone Battery by Yourself?</p>

<p>How to Repair iPhone Charging Port by Yourself?</p>

<p>Broken iPhone Screen</p>

<p>How to Fix Water Damaged iPhone</p>

<p>Phone repair: 8 tips to get your iPhone repaired efficiently</p>

<p>Which Types of Phone Repair Exist?</p>

<p>How to Repair Android Screen?</p>

<p>How to clean iPhone charging port. Follow These Easy Steps</p>

 

<h2 id='head_0'>Phone News</h2>
<p>The Most Anticipated Phones to Launch in 2023</p>

<p>Galaxy S23, iPhone 15 and More: Top Phones to Expect in 2023</p>

<p>Upcoming phones: The future smartphones of 2023</p>

<p>From the iPhone 15 to the Samsung Galaxy S23 and many more</p>

<p>Apple or Samsung? Which Phone Meets Your Needs</p>

<p>Samsung Galaxy S21 Ultra 5G - Revisited 2023</p>

<p>The Evolution from iPhone 5 to iPhone X - Revisited</p>

<p>Is the iPhone 12 Waterproof?</p>
</div>
</div>
);
}

export default Training;
