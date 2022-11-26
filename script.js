var counterElement =document.getElementById('counter')
var Decrementbtn = document.getElementById('Decrement')
var Incrementbtn = document.getElementById('Increment')
var resetbtn = document.getElementById('reset')
var alerttext = document.getElementById('alert')
var count = counterElement.innerHTML;

function Decrement() {
if(count>0){
 alerttext.innerHTML ='';
 resetbtn.style.display='';
count--;
console.log(count);
counterElement.innerText=count;
}
else{
 resetbtn.style.display='';
console.log(0);
alerttext.innerText='Error : Cannot go below 0'
}
if(count==0){
 alerttext.innerText='Error : Cannot go below 0'
}
}
function Increment() {
 resetbtn.style.display='';
 alerttext.innerHTML ='';
count++;
console.log(count);
counterElement.innerText=count;



}
function reset() {
 if(count>=1){
 
count=0;
console.log(count);
alerttext.innerText='Error : Cannot go below 0'
counterElement.innerText=count;
 }
 if(count==0){
  resetbtn.style.display='none';
 }
 else if(count>1){
  resetbtn.style.display='block';
 }
 
}

Decrementbtn.onclick = Decrement;
Incrementbtn.onclick = Increment;
resetbtn.onclick = reset;

