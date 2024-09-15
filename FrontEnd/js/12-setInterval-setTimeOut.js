//setTimeout(function,timeout(ms)) 
setTimeout(()=>{console.log('hello')},3000);

// setInterval is like setTimeout but it repeat the work for stop the cycle we should use id
const id=setInterval(()=>{console.log('beep')},1000);
setTimeout(()=>{clearInterval(id)},4000);
// after 4 beep stops 
