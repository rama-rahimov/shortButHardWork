import { useEffect, useRef } from 'react' ;

const element = document.querySelector('.Fast');
console.log(element);

function Ref() {
return (
<p className='Fast'>Hello</p>
)
}

export default Ref ;



// function App() {
//     const [text, setText] = useState("");
//     useEffect(() => {
//     setText(<>
//         <h1>What types of Tablet repair are offered?</h1>
//       <p>The partner stores of Simply Fixable offer a wide range of services, including cracked tablet screen repair, tablet battery replacement, charging port, front and back camera, head tablet jack, loudspeaker, home/power button, back camera lens, tablet glass repair, and water damage repair.</p>
      
//       <h1>Tablet screen repair</h1>
//       <p>How long does it take to repair a Tablet screen?
//       It takes 45 minutes to repair a tablet screen.</p>
      
//       <h1>How to stop the tablet screen from breaking?</h1>
//       <p>Use a high-quality screen protector and a protective case to minimize the risk of tablet screen breakage.</p>
      
//       <h1>Tablet battery replacement</h1>
//       <p>How long does it take to replace a Tablet battery?
//       It takes 30 minutes on average for tablet battery replacement.</p>
      
//       <h1>How to prevent the Tablet battery from being damaged?</h1>
//       <p>Avoid putting your tablet in extreme temperatures, and refrain from letting your tablet’s battery drain to 0%.</p>
      
//       <h1>Tablet charging port repair</h1>
//       <p>How long does it take to repair a Tablet charging port?
//       It takes 45 minutes to repair the tablet charging port.</p>
      
//       <h1>How to prevent the Tablet charging port from being broken?</h1>
//       <p>Gently insert and remove the tablet charger from the charging port and avoid putting pressure on it.</p>
      
//       <h1>iPad repair</h1>
//       <p>If you are facing any issues with your iPad, such as a cracked screen, overheating, iPad not charging, and unable to fix it yourself, you should take it to a repair store in your area for troubleshooting.</p>
      
//       <h1>Samsung tablet repair</h1>
//       <p>Samsung tablet users often complain about minor issues with the device such as a frozen screen, screen going black, tablet overheating, and battery not charging. These problems can be fixed by following simple steps such as restarting the tablet, factory resetting, or replacing the battery.</p>
      
//       <h1>Common Tablet Problems That Could Be Fixed With Us</h1>
//       <p>Here are some of the common problems faced by tablet users:</p>
      
//       <h1>Broken Tablet screen</h1>
//       <p>Mishandling of a tablet can break the screen, which will require screen replacement. To avoid screen damage, use a screen protector and a strong case.</p>
      
//       <h1>Tablet won’t turn on</h1>
//       <p>An issue with the battery or charging port may prevent your tablet from turning on. You can fix this issue by replacing the tablet’s battery. To avoid such issues in the future, take care of the battery and don’t let it drain to 0%.</p>
      
//       <h1>Tablet won’t charge</h1>
//       <p>A drained battery or an issue with the charger cable may prevent your tablet from charging. You can check your charging cable or replace the battery to fix the issue. Replace your tablet's battery to prevent such problems from happening in the future.</p>
      
//       <h1>Broken Tablet charging port</h1>
//       <p>Too much pressure on the charging port can break it and prevent it from charging the tablet. This issue can be fixed by replacing the charging port. Take proper care of your charging port to avoid any breakage.</p>
      
//       <h1>Tablet overheating</h1>
//       <p>Power-hungry apps, poor ventilation, or battery issues cause tablet overheating. Battery replacement, closing the apps, or cooling down the temperature can resolve this issue. To avoid these issues in the future, refrain from putting your tablet in extreme temperatures, always close the power-intensive apps when not in use, and take good care of your tablet’s battery.</p>
      
//       <h1>Tablet black screen</h1>
//       <p>It can result from software glitches, faulty display, or hardware malfunctions. Replacing the screen or addressing software or hardware-related issues can fix the black screen. Regular software updates and taking care of the screen can stop the tablet screen from turning black in the future.</p>
      
//       <h1>Tablet won’t turn off</h1>
//       <p>It can happen typically due to software or hardware malfunction. Resetting the tablet can resolve this issue. To avoid the issue from happening again, keep the tablet updated and avoid overloading it with too many apps.</p>
      
//       <h1>Tablet battery draining fast</h1>
//       <p>Old or defective battery can cause this issue, which can be fixed through battery replacement.  Reduce screen brightness, close unnecessary apps, and replace the battery when it ages to avoid such issues in the future.</p>
      
//       <h1>Tablet water damage</h1>
//       <p>Direct exposure to water can damage your tablet. To resolve this issue, stop using the tablet until it dries out completely, and don’t take it near water to avoid any damage in the future.</p>
      
//       <h1>Frozen Tablet</h1>
//       <p>Frozen tablet issues can arise from software errors or insufficient memory that can be fixed through a simple reset. Regularly update apps, reboot the tablet once in a while, and clear unused applications to avoid such issues from happening.</p>
      
//       <h1>Who is Simply Fixable?</h1>
//       <p>Simply Fixable is a platform that connects customers with local repair shops that have been vetted and approved by Simply Fixable. Our mission is to make it easy and affordable for people to get their mobile devices repaired. Our selection ensures  everyone has access to high-quality and affordable device repair services across the USA.</p>
//         </>)
//     }, []);
//   const fjff = document.body.getElementsByClassName('rightSide')[0] ;
//     console.log(fjff);
//     return (
//     <div className='header'>
//     <div className='leftSide'>
//     Ramaaaaaaaaaa
//     </div>
//     <div className='rightSide'>
//     {text}
//     </div>
//     </div>
//     );
//   }