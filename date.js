


var button1 = document.querySelector('#date1');
var button2 = document.querySelector('#date2');
button1.addEventListener('click', () => {
    var today = new Date();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = today.getDate();
    var current_date = `${month}/${date}/${year}`;
    button1.innerText = current_date;
});

button2.addEventListener('click', () => {
    var time = new Date();

    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var current_time = `${hours}:${minutes}:${seconds}`;
    button2.innerText = current_time;

  var current = time.toLocaleString();
 button2.innerText = current;

 });
 
 const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

 const today = new Date();
 let day = weekday[today.getDay()];
 console.log(day)




const x = new Date();
x.setHours(3);
console.log(x);
x.setDate(7);
console.log(x)
x.setFullYear(1970);
console.log(x);


const y = new Date();
console.log("month",y.getMonth()+1);
 const z=new Date();
 console.log('weak', z.getDay());