const horas = document.getElementById('horas');

const minutos = document.getElementById('minutos');

const segundos = document.getElementById('segundos');
const relogio = setInterval(()=>{
    
  let dateToday = new Date();
  let hr = dateToday.getHours();
 let min = dateToday.getMinutes();
 let seconds = dateToday.getSeconds();
  
  horas.textContent = hr
  minutos.textContent = min
  segundos.textContent = seconds

  if(hr<10) hr = '0'+ hr;

  if(min<10) min = '0'+ min;

  if(seconds<10) min = '0'+ seconds;

  

 


})