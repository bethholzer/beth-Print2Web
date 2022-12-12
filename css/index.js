// marquee clock

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('marqueeClock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

// analog clock 1

setInterval(() => {
  d = new Date(); 
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; 
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

// analog clock 2

// setInterval(() => {
//   b = new Date(); //object of date()
//   fr = b.getHours();
//   sh = b.getMinutes();
//   co = b.getSeconds();
//   fr_rotation = 30 * fr + sh / 2; //converting current time
//   sh_rotation = 6 * sh;
//   co_rotation = 6 * co;

//   fries.style.transform = `rotate(${fr_rotation}deg)`;
//   shake.style.transform = `rotate(${sh_rotation}deg)`;
//   coke.style.transform = `rotate(${co_rotation}deg)`;
// }, 1000);

// analog clock 3

setInterval(() => {
  a = new Date(); //object of date()
  ca = a.getHours();
  dg = a.getMinutes();
  bd = a.getSeconds();
  ca_rotation = 30 * ca + dg / 2; //converting current time
  dg_rotation = 6 * dg;
  bd_rotation = 6 * bd;

  cat.style.transform = `rotate(${ca_rotation}deg)`;
  dog.style.transform = `rotate(${dg_rotation}deg)`;
  bird.style.transform = `rotate(${bd_rotation}deg)`;
}, 1000);

// switch images

let images = ['img/riso-1.gif', 'img/riso-2.gif', 'img/riso-3.gif' , 'img/riso-5.gif'];

let index = 0;
const imgElement = document.querySelector('#riso-1');

function change() {
   imgElement.src = images[index];
   index > 2 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 5000);
};

// last modified

let text = document.lastModified;
document.getElementById("lastUpdate").innerHTML = text;

// Scroll Clock

// window.onscroll = function(){
//   scrollRotate();
// }

// function scrollRotate(){
//   let clockContainer = document.getElementById('clockContainer');
//   clockContainer.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

//   // let innerClock = document.getElementById('innerClock');
//   // innerClock.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";

// }