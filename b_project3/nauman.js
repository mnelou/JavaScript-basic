const clock=document.getElementById('clock')
//document.querySelector('#clock')

setInterval(function(){
  let currentTime=new Date()
//  console.log(Date.toLocateTimeString());
  clock.innerHTML=currentTime.toLocaleTimeString();
},1000);



